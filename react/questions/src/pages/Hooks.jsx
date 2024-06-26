import { useMemo, useRef, useState } from 'react';
import useCounter from '../hooks/useCounter';
import useDebounce from '../hooks/useDebounce';
import useDebounceFunc from '../hooks/useDebounceFunc';
import useFetch from '../hooks/useFetch';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useLocalStorage from '../hooks/useLocalStorage';
import { usePrevious } from '../hooks/usePrevious';
import useThrottle from '../hooks/useThrottle';
import useWindowSize from '../hooks/useWindowSize';

const Hooks = () => {
    const [currentCount, setCurrentCount] = useState(0);
    const { count, increment, decrement, reset } = useCounter(0, 1);
    const blueBoxRef = useRef(null);
    const { width, height } = useWindowSize();
    const { data, isLoading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users',
        { method: 'GET' }
    );
    const [inputText, setInputText] = useState(null);
    const [throttleInputText, setThrottleInputText] = useState(null);
    const debouncedText = useDebounce(inputText, 1000);

    // track the previous value of the count/state
    const previousCount = usePrevious(currentCount);

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
    const options = useMemo(() => {
        return {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 1.0, // when the blue box is completely visible
        };
    }, []);
    const intersectingEntry = useIntersectionObserver(
        blueBoxRef,
        options
    );
    console.log(
        '🚀 ~ Hooks ~ intersectingEntry:',
        intersectingEntry?.isIntersecting
    );

    return (
        <div>
            <div>
                current: {currentCount}, previous: {previousCount}
                <button
                    onClick={() => setCurrentCount(currentCount + 1)}
                >
                    Click
                </button>
            </div>
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
            <div>
                <h1>Intersection Observer Hook</h1>
                <div
                    style={{
                        height: '200vh',
                    }}
                >
                    <div
                        ref={blueBoxRef}
                        style={{
                            height: '50vh',
                            background: 'lightblue',
                        }}
                    >
                        <h3>
                            Announce when this comes into viewport
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hooks;
