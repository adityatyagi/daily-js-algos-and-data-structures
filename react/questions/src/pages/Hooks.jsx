import useCounter from '../hooks/useCounter';
import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import useDebounceFunc from '../hooks/useDebounceFunc';
import { useState } from 'react';
const Hooks = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);
    const { width, height } = useWindowSize();
    const { data, isLoading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users',
        { method: 'GET' }
    );
    const [inputText, setInputText] = useState(null);
    const debouncedText = useDebounce(inputText, 1000);
    const debouncedInputChangeHandler = useDebounceFunc(
        inputChangeHandler,
        1000
    );
    function inputChangeHandler(e) {
        console.log(e.target.value);
        const text = e.target.value;
        setInputText(text);
    }

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
            <hr />
            <div>
                <h2>useDebounce</h2>
                <input
                    type="text"
                    onChange={debouncedInputChangeHandler}
                />
                <p>Text: {inputText}</p>
                <p>Debounced Text: {debouncedText}</p>
            </div>
        </div>
    );
};

export default Hooks;
