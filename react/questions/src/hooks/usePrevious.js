import { useEffect, useRef } from 'react';
export function usePrevious(state) {
    const ref = useRef();

    useEffect(() => {
        ref.current = state;
    }, [state]);

    return ref.current;
}
