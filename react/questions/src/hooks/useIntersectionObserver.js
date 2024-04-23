import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, optionsForIO) => {
    // track the intersecting component across re-renders
    const [interSectingComponent, setIntersectingComponent] =
        useState(null);

    // track when the elementToTrackRef or optonsForIO Changes
    useEffect(() => {
        // if elementToTrackRef is available and its a browser
        if (
            ref.current &&
            typeof IntersectionObserver === 'function'
        ) {
            const handler = (entries) => {
                console.log('🚀 ~ handler ~ entries:', entries);
                setIntersectingComponent(entries[0]);
            };

            const observer = new IntersectionObserver(
                handler,
                optionsForIO
            );
            observer.observe(ref.current);

            return () => {
                setIntersectingComponent(null);
                observer.disconnect();
            };
        }
    }, [ref, optionsForIO]);

    return interSectingComponent;
};

export default useIntersectionObserver;
