// node contains reference to the next node and to the previous node - traverse in either directions
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        // create new node
        const newNode = new Node(data);

        // check if the list is empty
        if (!this.head) {
            this.head = newNode; // newNode will be the head
            this.tail = newNode; // newNode will be the tail
        } else {
            // adding it to the end of the list
            // HEAD <--> n1 <--> n2 <--> n3 <--> TAIL <--> newNode
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
    }

    prepend(data) {
        // adding it to the start of the list
        //  newNode <--> HEAD <--> n1 <--> n2 <--> n3 <--> TAIL
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
    }

    remove(node) {
        // if node is the HEAD
        if (node === this.head) {
            this.head = node.next; // update the head to the next node
        }

        // if node is TAIL
        if (node === this.tail) {
            this.tail = node.previous;
        }

        if (node.previous) {
            node.previous.next = node.next;
        }

        if (node.next) {
            node.next.previous = node.previous;
        }
    }

    traverseForward() {
        let current = this.head;
        if (current) {
            console.log(current.data);
            current = current.next; // update to next node
        }
    }

    traverseBackward() {
        let current = this.tail;
        if (current) {
            console.log(current.data);
            current = current.previous;
        }
    }

    printForward() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }

    printBackward() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.previous;
        }
        console.log(result.trim());
    }
}

const dll = new DoubleLinkedList();
dll.append('A');
dll.append('B');
dll.append('C');
dll.append('D');
dll.append('E');

// print doubly linked list
dll.printForward();
dll.printBackward();

// DEQUE IMPLEMENTATION
// In the context of an Object Pool pattern, the statement you provided describes how the pool manages the allocation and retrieval of objects.

// 1. **Remembering the First and Last Objects**: This means that the Object Pool keeps track of the first and last objects in its internal list of objects. This tracking is crucial for efficiently managing the pool.

// 2. **When a `getElement` Request is Made**: This refers to the operation where an external entity requests an object from the pool. This could be any part of the program that needs to use an object but doesn't want to create it from scratch due to performance or resource constraints.

// 3. **The Object Pool Returns the First Free Object**: When the `getElement` request is made, the pool fulfills the request by providing an available (free) object. Instead of creating a new object every time, it reuses existing ones that are no longer in use. Returning the first free object implies that the pool prioritizes reusing the earliest available object in its internal list.

// 4. **Replaces the Reference to the First Free Object**: After providing an object to the requester, the pool updates its internal state by replacing the reference to the first free object with the next object in the list. This means that the object provided to the requester is no longer considered free, and the pool moves on to the next available object for subsequent requests.

// By implementing this mechanism, the Object Pool pattern optimizes resource usage by recycling objects and reducing the overhead of creating and destroying objects frequently. It ensures that objects are efficiently reused while maintaining performance and preventing resource exhaustion.
// https://egghead.io/blog/object-pool-design-pattern
class ObjectPoolMember {
    constructor(data) {
        this.data = data;
    }
    next = null;
    previous = null;
    free = true;
}

class ObjectPool {
    #poolArray = [];
    #numberOfFreeElements = 0;
    #firstFreeElement = null;
    #lastFreeElement = null;
    resetFunc = () => {};
    creatorFunc = () => {};

    constructor(creatorFunc, resetFunc = (obj) => obj, size = 1000) {
        this.creatorFunc = creatorFunc;
        this.resetFunc = resetFunc;

        for (let i = 0; i < size; i++) {
            this.createElement();
        }
    }

    createElement() {
        this.#numberOfFreeElements++;
        const data = this.resetFunc(this.creatorFunc());
        const newObjectPoolMember = new ObjectPoolMember(data);
        this.#poolArray.push(newObjectPoolMember);

        // update the last free element as the object is added to the last (tail of deque)
        if (!this.#lastFreeElement) {
            this.#lastFreeElement = newObjectPoolMember;
        } else {
            this.linkElement(newObjectPoolMember);
        }

        return newObjectPoolMember;
    }

    // link the element to the last
    linkElement(resource) {
        resource.previous = this.#lastFreeElement;
        this.#lastFreeElement.next = resource;
        this.#lastFreeElement = resource;
    }

    // frees up the "resource" passed
    // the first free element becomes the "next" node of the passed resource
    unlinkFirstElement(resource) {
        this.#firstFreeElement = resource.next;
        this.#firstFreeElement.previous = null;
        resource.next = null;
        resource.previous = null;
    }
}
