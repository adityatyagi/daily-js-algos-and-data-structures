import useCounter from '../hooks/useCounter';
import useWindowSize from '../hooks/useWindowSize';
const Hooks = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);
    const { width, height } = useWindowSize();
    return (
        <div>
            Hooks
            <div>
                <h2>useCounter</h2>
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
            <hr />
            <div>
                <h2>useWindowSize</h2>
                <p>width: {width}</p>
                <p>height: {height}</p>
            </div>
        </div>
    );
};

export default Hooks;
