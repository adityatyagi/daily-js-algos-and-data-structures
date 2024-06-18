import { useEffect, useState } from 'react';
// takes the API url and Element to render. Fetches the data and passes it to the Element. Handles all the error and loading states
export default function withFetchData(url, Element) {
    return function HOCComponent(props) {
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const [data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const dataFromAPI = await fetch(url);
                    if (dataFromAPI.ok) {
                        const data = await dataFromAPI.json();
                        setData(data);
                    } else {
                        setIsError(true);
                    }
                } catch (error) {
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchData();
        }, []);

        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        if (isError) {
            return <h2>Error.</h2>;
        }

        return <Element data={data} {...props} />;
    };
}
