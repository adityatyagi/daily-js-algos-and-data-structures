import { useState } from 'react';
function useCounter(initialValue, step) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + step);
    }

    function decrement() {
        setCount(count - step);
    }

    function reset() {
        setCount(initialValue);
    }

    return {
        count,
        increment,
        decrement,
        reset,
    };
}

export default useCounter;
