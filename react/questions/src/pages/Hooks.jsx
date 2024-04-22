import useCounter from '../hooks/useCounter';
const Hooks = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);
    return (
        <div>
            Hooks
            <div>
                Count: {count}
                <button type="button" onClick={increment}>
                    Increment
                </button>
                <button type="button" onClick={decrement}>
                    Decrement
                </button>
                <button type="button" onClick={reset}>
                    REset
                </button>
            </div>
        </div>
    );
};

export default Hooks;
