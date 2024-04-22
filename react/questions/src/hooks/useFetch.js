import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, seterror] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    ...options,
                });
                if (!response.ok) {
                    throw new Error('something went wrong');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                seterror(error);
            } finally {
                setIsLoading(false);
            }
        }
        if (url) {
            fetchData();
        }
    }, [url, options]);
    return {
        data,
        isLoading,
        error,
    };
};

export default useFetch;
