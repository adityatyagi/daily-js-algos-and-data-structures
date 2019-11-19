class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            while (true) {
                if (current.value > value) {
                    // go left

                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        break;
                    }
                } else {
                    // go right
                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = new Node(value);
                        break;
                    }
                }
            }
        }
        return this;
    }
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
        return this.root.serialize();
    }
}

class Node {
    constructor(value = null, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
    serialize() {
        const ans = {
            value: this.value
        };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    }
}
const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map(num => tree.add(num));
console.log(tree.to());