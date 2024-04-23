import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const useLocalStorage = (key, initialValue) => {
    if (!isBrowser) {
        return [initialValue, () => {}, () => {}];
    }

    if (!key) {
        throw new Error('LocalStorage key may not be falsy');
    }

    const storedValue = localStorage.getItem(key);
    const initial = storedValue
        ? JSON.parse(storedValue)
        : initialValue;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(initial);

    const set = (newValue) => {
        try {
            const valueToStore =
                newValue instanceof Function
                    ? newValue(value)
                    : newValue;

            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // Handle Errors
        }
    };

    const remove = () => {
        try {
            localStorage.removeItem(key);
            setValue(undefined);
        } catch (error) {
            // Handle Errors
        }
    };

    return [value, set, remove];
};

export default useLocalStorage;
