// let arr = new Array(1000).fill(0);
// let newArray = arr;

// // garbage collection only when both references are set to null;
// arr = null;
// newArray = null;

function normalArr(n) {
    let arr = [];
    for (let index = 0; index < n; index++) {
        arr.push(index);
    }
    return arr;
}

function optimizedArr(n) {
    let newArr = new Array(n).fill(0);
    for (let index = 0; index < newArr.length; index++) {
        newArr[index] = index;
    }
    return newArr;
}

// console.time();
// // normalArr(100000);
// optimizedArr(100000);
// console.timeEnd();

// -------------------- FLAG BASED RESOURCE POOL ----------------------
class ResourcePoolMember {
    constructor(data) {
        this.data = data;
        this.available = true; // when a new pool member is created, it is available by default
    }
}

class ResoucePool {
    poolArr = null;

    // will be provided externally
    createResourceFunc = () => {}; // will create an object and return that
    resetResourceFunc = () => {}; // will reset the object during release
    constructor(
        createResourceFunc,
        resetResourceFunc,
        initialSize = 1000 // initial size of the resource pool
    ) {
        this.createResourceFunc = createResourceFunc;
        this.resetResourceFunc = resetResourceFunc;
        this.poolArr = new Array(initialSize)
            .fill(0)
            .map(() => this.createElement());
    }

    // create fresh instance of the pool member and we reset just for safe side
    createElement() {
        const data = this.resetResourceFunc(
            this.createResourceFunc()
        );
        return new ResourcePoolMember(data);
    }

    // returns free/available resource from the pool
    // iterate through the pool and return the first available one
    getElement() {
        for (let i = 0; i < this.poolArr.length; i++) {
            if (this.poolArr[i].available) {
                // if the resource is available
                this.poolArr[i].available = false; // set the flag
                return this.poolArr[i]; // return the resource
            }
        }
    }

    // releases the element
    releaseResource(resource) {
        resource.available = true;
        this.resetResourceFunc(resource.data);
    }
}

// TEST
const createResourceFunc = () => {
    let counterObj = {
        counter: 0,
    };
    return counterObj;
};

const resetResourceFunc = (resource) => {
    resource.counter = 0;
    delete resource.name;
    return resource;
};

const myPool = new ResoucePool(
    createResourceFunc,
    resetResourceFunc,
    1
);
let resourceReadyToUse = myPool.getElement();
resourceReadyToUse.data.counter++;
resourceReadyToUse.data.name = 'Aditya';
myPool.releaseResource(resourceReadyToUse);
// console.log('🚀 ~ resourceReadyToUse:', resourceReadyToUse);

// -------------------- TIME BASED RESOURCE POOL ----------------------
// we will maintain resource pool based on time. Every time a resource is asked, we will check if the previous resources have expired, and if they have, we will reset them and return them
const DURATION = 2000;
class ResourcePoolMemberTimeBased {
    constructor(data) {
        this.data = data;
        this.time = 0;
    }
}

class ResoucePoolTimeBased {
    poolArr = null;
    createResFunc = () => {};
    resetResFunc = () => {};
    constructor(createResFunc, resetResFunc, initialPoolSize = 1000) {
        this.createResFunc = createResFunc;
        this.resetResFunc = resetResFunc;
        this.poolArr = new Array(initialPoolSize)
            .fill(0)
            .map(() => this.createResource());
    }

    createResource() {
        const data = this.resetResFunc(this.createResFunc());
        return new ResourcePoolMemberTimeBased(data);
    }

    getResource() {
        // iterate over the pool and check if the previous resource's time has elapsed / expired
        for (let i = 0; i < this.poolArr.length; i++) {
            if (Date.now() - this.poolArr[i].time > DURATION) {
                // release the resource
                this.releaseResource(this.poolArr[i]);
                this.poolArr[i].time = Date.now();
                return this.poolArr[i];
            }
        }
    }

    releaseResource(resource) {
        resource.time = 0;
        this.resetResFunc(resource.data);
    }
}

// TEST
const createResFunc = () => {
    let counterObj = {
        counter: 0,
    };
    return counterObj;
};

const resetResFunc = (resource) => {
    resource.counter = 0;
    return resource;
};

const myPoolTimeBased = new ResoucePoolTimeBased(
    createResFunc,
    resetResFunc,
    1
);
let resourceReadyToUseTimeBased = myPoolTimeBased.getResource();
resourceReadyToUseTimeBased.data.counter++;
// setTimeout(() => {
//     const resource2 = myPoolTimeBased.getResource();
//     console.log(resource2 === resourceReadyToUseTimeBased); // same resource returned after 3500ms
// }, 3500);

// -----------------------INCREASE POOL SIZE DYNAMICALLY -------------------------------
// increase the size of the pool by X% when Y% of the resources are left - O(N) - amortized space increase
const THRESHOLD_PERCENT = 20; // increase the pool size when 10% of the resources are left
const INCREASE_PERCENT = 50; // increase the pool by 50%

class ResoucePoolDynamicAmortized {
    poolArr = [];
    createResFunc = () => {};
    resetResFunc = () => {};
    numberOfFreeElements = 0; // number of free elements
    indexOfNextFreeElement = 0; // index of the next free element,
    constructor(createResFunc, resetResFunc, initialPoolSize = 10) {
        this.createResFunc = createResFunc;
        this.resetResFunc = resetResFunc;
        for (let i = 0; i < initialPoolSize; i++) {
            this.createResource();
        }
    }

    increasePoolSize() {
        const increaseBy = Math.round(
            (INCREASE_PERCENT * this.poolArr.length) / 100
        );
        for (let index = 0; index < increaseBy; index++) {
            this.createResource();
        }
        this.numberOfFreeElements += increaseBy;
    }

    createResource() {
        this.numberOfFreeElements++;
        this.poolArr.push(this.resetResFunc(this.createResFunc()));
        return this.poolArr[this.poolArr.length - 1]; // return the last element
    }

    getResource() {
        // check if the remaining poolsize is only 10% left
        if (
            this.numberOfFreeElements / this.poolArr.length <=
            THRESHOLD_PERCENT / 100
        ) {
            this.increasePoolSize();
        }

        this.numberOfFreeElements--;
        const freeElement = this.poolArr[this.indexOfNextFreeElement];
        this.poolArr[this.indexOfNextFreeElement++] = null;
        console.log(
            '🚀 ~ ResoucePoolDynamicAmortized ~ getResource ~ freeElement:',
            freeElement
        );
        return freeElement;
    }

    releaseResource(resource) {
        this.poolArr[--this.indexOfNextFreeElement] = resource;
        this.resetResFunc(resource);
    }

    getSize() {
        return this.poolArr.length;
    }
}

const createFunc = () => {
    return {
        counter: 0,
    };
};

const resetFunc = (r) => {
    r.counter = 0;
    return r;
};
const pool = new ResoucePoolDynamicAmortized(createFunc, resetFunc);
const r1 = pool.getResource();
const r2 = pool.getResource();
const r3 = pool.getResource();
const r4 = pool.getResource();
const r5 = pool.getResource();
const r6 = pool.getResource();
const r7 = pool.getResource();
const r8 = pool.getResource();
const r9 = pool.getResource();
console.log('resource', r1);
