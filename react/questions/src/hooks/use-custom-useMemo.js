import { useEffect } from 'react';
import { useRef } from 'react';
function areSame(previousDeps, nextDeps) {
    // if prevDeps are not there
    if (previousDeps === null) return false;
    if (previousDeps.length !== nextDeps.length) return false;

    for (let index = 0; index < previousDeps.length; index++) {
        const element = previousDeps[index];
        if (element !== nextDeps[index]) {
            return false;
        }
    }

    return true;
}
function useCustomUseMemo(cb, deps = []) {
    // store/cache the result of the previous calculation in a state that should persist across re-renders
    const cachedRef = useRef(null);

    // check if the deps changed, then re-calculate the new value and update the cache, else return the previous value
    // if there is no cachedRef.current, then its a first render

    if (
        !cachedRef.current ||
        !areSame(cachedRef.current.deps, deps)
    ) {
        cachedRef.current = {
            value: cb(),
            deps: deps,
        };
    }

    // cleanup the cache once the component unmounts
    useEffect(() => {
        return () => {
            cachedRef.current = null;
        };
    }, []);

    // return the calculated value
    return cachedRef.current.value;
}

export default useCustomUseMemo;
