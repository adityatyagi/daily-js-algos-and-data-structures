import { useEffect, useState } from 'react';

const useDebounce = (text, delay) => {
    // do not want the value to persist b.w re-renders
    const [debouncedValue, setDebouncedValue] = useState(text);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(text);
        }, delay);
        // cleanup on text/delay change
        return () => {
            clearTimeout(timer);
        };
    }, [text, delay]);
    return debouncedValue;
};

export default useDebounce;
