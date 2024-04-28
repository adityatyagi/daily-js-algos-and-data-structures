import { useState } from 'react';
function useLRUCache(capacity) {
    // cache
    const [cache] = useState(new Map());

    function get(key) {
        // if the key is present, delete the key from its current position in the cache and update its access time
        if (key) {
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            // return the value
            return value;
        }

        // if the key is not present in the cache
        return null;
    }

    function put(key, value) {
        // if key is present, then update the value and the access time
        if (cache.get(key)) {
            // the cache size has not reached its capacity
            cache.delete(key);
        } else if (capacity === cache.size) {
            // if the capacity is reached
            const lruKey = cache.keys().next().value;
            cache.delete(lruKey);
        }

        // if key was not present at first
        cache.set(key, value);
    }

    return {
        get,
        put,
    };
}

export default useLRUCache;
