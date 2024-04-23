import useCounter from '../hooks/useCounter';
import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import useDebounceFunc from '../hooks/useDebounceFunc';
import { useState } from 'react';
import useThrottle from '../hooks/useThrottle';
import useLocalStorage from '../hooks/useLocalStorage';

const Hooks = () => {
    const { count, increment, decrement, reset } = useCounter(0, 1);
    const { width, height } = useWindowSize();
    const { data, isLoading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users',
        { method: 'GET' }
    );
    const [inputText, setInputText] = useState(null);
    const [throttleInputText, setThrottleInputText] = useState(null);
    const debouncedText = useDebounce(inputText, 1000);

    function inputChangeHandler(e) {
        const text = e.target.value;
        setInputText(text);
    }

    const debouncedInputChangeHandler = useDebounceFunc(
        inputChangeHandler,
        1000
    );

    function inputChangeHandlerThrottle(e) {
        const text = e.target.value;
        setThrottleInputText(text);
    }
    const throttledInputHandler = useThrottle(
        inputChangeHandlerThrottle,
        1000
    );

    const [value, set, remove] = useLocalStorage('username', 'guest');
    // saving default values in the localstorage
    const [valueForLS, setValueForLS] = useState();

    function saveOnLocalStorage() {
        set(valueForLS);
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
            <div>
                <h2>useThrottle</h2>
                <input type="text" onChange={throttledInputHandler} />
                <p>Throttled Text: {throttleInputText}</p>
            </div>
            <div>
                <h2>useLocalStorage</h2>
                <input
                    type="text"
                    placeholder="value"
                    onChange={(e) => setValueForLS(e.target.value)}
                />
                <button type="button" onClick={saveOnLocalStorage}>
                    Save in Local Storage
                </button>
                <button type="button">Get - {value}</button>
                <button
                    type="button"
                    onClick={() => {
                        remove('sample');
                    }}
                >
                    remove
                </button>
            </div>
        </div>
    );
};

export default Hooks;
