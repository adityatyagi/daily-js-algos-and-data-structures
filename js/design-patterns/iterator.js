//
const num = [1, 2, 3];

const iterator = createIterator(num);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function createIterator(collection) {
    // to keep track of the items of iterable, e.g. array
    let index = 0;

    return {
        next: function () {
            if (index < collection.length) {
                return {
                    value: collection[index++], // returns next value from the sequence
                    done: false, // determines if we have reached the end of the collection
                };
            }
            return {
                value: null,
                done: true,
            };
        },
    };
}

// iterators using generator functions
// The generator itself can be iterated only once per instance. Once a generator has finished yielding all its values (when done is true), it cannot be reset or reused. To iterate over the values again, you need to create a new generator instance.
/**
 * Generator functions (function*) create generator objects.
Generator objects conform to the iterable and iterator protocols.
Each generator instance can be iterated only once. After it is exhausted, it cannot be reused.
To iterate over the values again, a new generator instance must be created by calling the generator function again.
 */

console.log('------------------------');
function* Gen() {
    yield* [1, 2, 3, 4];
}
const g = Gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log('------------------------');

// generator functions that will be used to iterate only once
function* createIterprator() {
    yield 'A';
    yield 'B';
    yield 'C';
    yield 'D';
}

const i = createIterprator();
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

// console.log([...i]); // empty array as the iterator's instance has been iterated once

for (const value of i) {
    console.log(value);
}

// iterators using Symbol.iterator static method - multiple iterables
const customIterable = {
    *[Symbol.iterator]() {
        yield [1, 2, 3, 4];
    },
};

// Symbol.iterator helps us to re-iterate over already iterated values
console.log(...customIterable);
console.log(...customIterable);
console.log(...customIterable);

console.log('-----ROUND ROBIN-----');
function* RoundRobin(collection) {
    let current = 0;
    while (true) {
        const value = collection[current++ % collection.length];
        const reset = yield value;
        if (reset) {
            current = 0;
        }
    }
}

const rr = RoundRobin(['a', 'b', 'c', 'd']);
console.log(rr.next());
console.log(rr.next());
console.log(rr.next(true));
