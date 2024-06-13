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
