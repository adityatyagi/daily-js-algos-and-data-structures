import useCounter from '../hooks/useCounter';
import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';
const Hooks = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);
    const { width, height } = useWindowSize();
    const { data, isLoading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            method: 'GET',
        }
    );

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
            <hr />
            <div>
                <h2>useFetch</h2>
                {isLoading && <p>IS LOADING....</p>}
                {!isLoading && error && <p>Something went wrong</p>}
                {!isLoading && !error && (
                    <ul>
                        {data &&
                            data.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Hooks;
