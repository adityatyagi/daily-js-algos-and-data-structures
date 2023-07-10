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

class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  // push an element at the last of the array
  push(value) {
    let newNode = new Node(value);
    this.length++;

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  // remove the last node
  pop() {
    let head = this.head;

    if (!head) return null;

    if (head === this.tail) {
      let node = head;
      this.tail = this.head = null;
      this.length--;
      return node.value;
    }

    // find the secondlastelement
    let secondlastelement = null;
    let current = this.head;
    while (current) {
      if (current.next === this.tail) {
        secondlastelement = current;
      }
      current = current.next;
    }
    let lastElement = secondlastelement.next;
    if (!lastElement) return null;
    secondlastelement.next = null;
    this.tail = secondlastelement;
    this.length--;
    return lastElement.value;
  }

  delete(index) {
    if (index === 0) {
      let head = this.head;
      if (!head) {
        return null;
      } else {
        let node = head;
        this.head = head.next;
        this.length--;
        return node.value;
      }
    }

    let indexOfNodePriorToNodeToDelete = index - 1;
    let nodePriorToNodeToDelete = null;
    let current = this.head;
    let i = 0;

    while (current) {
      if (indexOfNodePriorToNodeToDelete === i) {
        nodePriorToNodeToDelete = current;
      }
      current = current.next;
      i++;
    }

    let nodeToDelete = nodePriorToNodeToDelete.next;

    if (!nodeToDelete) return null;

    nodePriorToNodeToDelete.next = nodeToDelete.next;

    if (!nodePriorToNodeToDelete.next.next) {
      this.tail = nodePriorToNodeToDelete.next;
    }
    this.length--;
    return nodeToDelete.value;
  }

  get(index) {
    let node = null;
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) {
        node = current;
      }
      current = current.next;
      i++;
    }

    if (!node) return null;
    return node.value;
  }

  printLinkedList() {
    let linkedList = [];
    if (!this.head) return linkedList;
    let current = this.head;
    while (current) {
      linkedList.push(current.value);
      current = current.next;
    }
    return linkedList;
  }
}

let sampleLinkedList = new LinkedList();
sampleLinkedList.push(3);
sampleLinkedList.push(44);
sampleLinkedList.push(23);
sampleLinkedList.push(11);
console.log(sampleLinkedList.printLinkedList());
sampleLinkedList.pop();
// console.log(sampleLinkedList.printLinkedList());
sampleLinkedList.delete(1);
console.log(sampleLinkedList.printLinkedList());
console.log(sampleLinkedList.get(1));