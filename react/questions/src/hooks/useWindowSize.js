import { useEffect, useState } from 'react';

function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleResize() {
            console.log(
                '🚀 ~ handleResize ~ handleResize:',
                handleResize
            );
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        width,
        height,
    };
}
export default useWindowSize;
