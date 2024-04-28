// LRU or Least Recently Used Cache can be benefitial to optimize performance by storing frequently searched data and evicting the least recently used data when the cache reaches its limit

import { useState, useEffect } from 'react';
import useLRUCache from '../hooks/useLRUCache';

// LRU is a Map() implementation
class LRUCache {
    // constructor
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        // if the key is already present, update the access time
        // Updating Access Time in a Map - get the value, delete the key and then set the key,value pair
        if (this.cache.get(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);

            // update the access time
            this.cache.set(key, value);

            // return the value
            return value;
        }

        // if the key is not available
        return null;
    }

    put(key, value) {
        // check if the key is already present, then update the value and the access time
        if (this.cache.get(key)) {
            // update the value and access time
            this.cache.delete(key);
        } else if (this.capacity === this.cache.size) {
            // if the size of the cache is reached while adding a new key, then get the Least Recently Used item and delete it
            // this.cache.keys() - returns an iterator object containing the keys of the cache entries. The .next() method returns an object that has to keys - value & done. The 'value' returns the next key (first of the keys available here) and 'done' returns if the iteration is completed.
            // hence, this.cache.keys().next().value - returns the 1st KEY IN THE CACHE which corresponds to the Least Recently Used.
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, value);
    }
}
const LRUCacheComponent = () => {
    // const [cache] = useState(new LRUCache(5));
    const { get, put } = useLRUCache(5);
    // eslint-disable-next-line no-undef
    // useEffect(() => {
    //     cache.put('key1', 'value1');
    //     cache.put('key2', 'value2');
    //     cache.put('key3', 'value3');
    //     cache.put('key4', 'value4');
    //     console.log(cache);
    //     const key1Val = cache.get('key1'); // accessed key1 and updated the access time, hence the next LRU is key2
    //     console.log('🚀 ~ useEffect ~ key1Val:', key1Val);
    //     cache.put('key5', 'value5'); // cache capacity reached
    //     cache.put('key6', 'value6'); // cache overflow. Will delete the LRU i.e. key2 and add key6
    //     const key2Val = cache.get('key2');
    //     console.log('🚀 ~ useEffect ~ key2Val:', key2Val); // null
    // }, [cache]);

    put('key1', 'value1');
    put('key2', 'value2');
    put('key3', 'value3');
    put('key4', 'value4');
    const key1Val = get('key1'); // accessed key1 and updated the access time, hence the next LRU is key2
    console.log('🚀 ~ useEffect ~ key1Val:', key1Val);
    put('key5', 'value5'); // cache capacity reached
    put('key6', 'value6'); // cache overflow. Will delete the LRU i.e. key2 and add key6
    const key2Val = get('key2');
    console.log('🚀 ~ useEffect ~ key2Val:', key2Val); // null

    return <div>LRUCache</div>;
};

export default LRUCacheComponent;
