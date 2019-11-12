class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        console.log('New ArrayList after push', this.data);
    }

    pop() {
        let poppedValue = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        console.log('New ArrayList after pop', this.data);
        return poppedValue;
    }

    get(index) {
        if (this.length > index) {
            return this.data[index];
        } else {
            return 'No Data Found at this index';
        }
    }

    delete(index) {
        let deletedValue = this.data[index];
        this._collapseArray(index);
        console.log('New ArrayList after delete', this.data);
        return deletedValue;
    }

    _collapseArray(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    serialize() {
        return this.data;
    }
}

let sampleArray = new ArrayList();
sampleArray.push(1);
sampleArray.push(2);
console.log(sampleArray.get(1));
sampleArray.push(3);
sampleArray.push(55);
console.log(sampleArray.get(3));
sampleArray.pop();
sampleArray.pop();
sampleArray.push(76);
sampleArray.push(99);
console.log('Deleted Value', sampleArray.delete(2));