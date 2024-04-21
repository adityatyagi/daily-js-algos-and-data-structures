import { useMemo } from 'react';
import { useState } from 'react';
import useCustomUseMemo from '../hooks/use-custom-useMemo';
const UseMemoComponent = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(100);

    function squaredValue() {
        console.log('expensive calculation');
        return counter1 * counter1;
    }

    // const memoizedSquaredValue = useMemo(squaredValue, [counter1]);

    const customMemoizedSquaredValue = useCustomUseMemo(
        squaredValue,
        [counter1]
    );
    return (
        <>
            {/* Squared Value: {memoizedSquaredValue} */}
            Custom Squared Value: {customMemoizedSquaredValue}
            <button onClick={() => setCounter1(counter1 + 1)}>
                Increment Counter 1 - {counter1}
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increment Counter 2 - {counter2}
            </button>
        </>
    );
};

export default UseMemoComponent;
