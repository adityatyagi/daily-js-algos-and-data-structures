/*
 length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
*/

// a particular node of a linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// we will be keeping track of HEAD and TAIL
class LinkedList {
    constructor() {
        this.tail = this.head = null; // initially the list is empty
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        this.length++;

        if (!this.head) {
            // 1. If the list is empty
            this.head = node;
        } else {
            // 2. If the list is not empty
            this.tail.next = node;
        }

        // update the TAIL pointer now pointing to the last element
        this.tail = node;
    }

    pop() {
        // 1. If the list is empty
        if (!this.head) return null;

        // 2. If the list is not empty but has only 1 node i.e. HEAD = TAIL
        if (this.head === this.tail) {
            const node = this.head;
            this.tail = this.head = null;
            return node.value;
        }

        // 3. If the list is not empty and has more than 1 element
        // 3.1 Find the second to last element (penultimate node)
        let current = this.head;
        let secondLastElement = null;

        while (current) {
            // check if the current node is the second last node, as its next will point to last node i.e. tail
            if (current.next === this.tail) {
                secondLastElement = current; // return second last node
            }
            current = current.next;
        }

        const lastElement = secondLastElement.next.value;

        // remove the pointer of the second last element
        secondLastElement.next = null;

        // update the tail
        this.tail = secondLastElement;

        this.length--;

        return lastElement;
    }

    delete(index) {

        // if the user is asking to delete head
        if (index === 0) {
            head = this.head;
            if (head) {
                // if the list is not empty
                this.head = head.next
            } else {
                // if the list is empty
                this.head = null;
            }
            this.length--;
            return head.value;
        }

        // find the node 1 prior to the node to delete
        let indexOfSecondLastNode = index - 1; // beacause we want 1 node prior to asked index
        let current = this.head;
        let i = 0;
        let nodePriorToNodeToDelete = null;
        while (current) {
            if (indexOfSecondLastNode === i) {
                nodePriorToNodeToDelete = current;
            }
            current = current.next;
            i++;
        }

        const nodeToDelete = nodePriorToNodeToDelete.next;

        // if the node being asked to delete does not exisit
        if (!nodeToDelete) return null;

        // update the pointer of nodePriorToNodeToDelete to point to the node next to the node to delete
        nodePriorToNodeToDelete.next = nodeToDelete.next;

        // check if the node being pointed by nodePriorToNodeToDelete is the last node, update tail
        if (!nodePriorToNodeToDelete.next.next) {
            this.tail = nodePriorToNodeToDelete.next;
        }

        this.length--;
        return nodeToDelete.value;
    }

    printLinkedList() {
        let linkedList = [];
        let head = this.head;
        if (!head) {
            return linkedList;
        }

        while (head) {
            linkedList.push(head.value);
            head = head.next;
        }

        return linkedList;
    }

    // get value of at a particular index
    get(index) {
        let indexToFind = index;
        let current = this.head;
        let i = 0;
        let nodeToFind = null;
        while (current) {
            if (indexToFind === i) {
                nodeToFind = current;
            }
            current = current.next;
            i++;
        }
        if (!nodeToFind) return null;
        return nodeToFind.value;
    }
}

let sampleLinkedList = new LinkedList();
sampleLinkedList.push(3);
sampleLinkedList.push(44);
sampleLinkedList.push(23);
sampleLinkedList.push(11);
console.log(sampleLinkedList.printLinkedList());
sampleLinkedList.pop();
console.log(sampleLinkedList.printLinkedList());
sampleLinkedList.delete(1);
console.log(sampleLinkedList.printLinkedList());
console.log(sampleLinkedList.get(1));