// compose and pipe
/**
 * compose: right to left
 * pipe: left to right
 */

const addFive = (num) => {
    return num + 5;
};

const subtractTwo = (num) => {
    return num - 2;
};

const multiplyFour = (num) => {
    return num * 4;
};

function compose(...fns) {
    return function (init) {
        // let result = init;
        // for (let i = fns.length - 1; i >= 0; i--) {
        //     console.log('🚀 ~ fns[i]:', fns[i]);
        //     result = fns[i](result);
        // }
        // return result;

        // compose: Right -> Left
        // return fns.reduceRight((acc, curr) => {
        //     return curr(acc);
        // }, init);

        // pipe: Left -> Right
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, init);
    };
}
const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
