import { useRef } from 'react';

const useDebounceFunc = (cb, delay) => {
    // need to persist timerRef across re-renders
    const timerRef = useRef();

    const debouncedCallback = (...args) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            cb(...args);
        }, delay);
    };

    return debouncedCallback;
};

export default useDebounceFunc;
