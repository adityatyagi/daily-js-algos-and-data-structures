import { useRef } from 'react';

const useThrottle = (callback, delay = 1000) => {
    const timeoutRef = useRef(null);
    const shouldWaitRef = useRef(false);
    const waitingArgsRef = useRef(null);

    const timeoutFunc = () => {
        if (waitingArgsRef.current === null) {
            shouldWaitRef.current = false;
        } else {
            callback(...waitingArgsRef.current);
            waitingArgsRef.current = null;
            timeoutRef.current = setTimeout(timeoutFunc, delay);
        }
    };

    const throttledCallback = (...args) => {
        if (shouldWaitRef.current) {
            waitingArgsRef.current = args;
            return;
        }

        callback(...args);
        shouldWaitRef.current = true;
        timeoutRef.current = setTimeout(timeoutFunc, delay);
    };

    return throttledCallback;
};

export default useThrottle;
