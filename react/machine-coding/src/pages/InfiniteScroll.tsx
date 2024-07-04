import { useEffect, useState } from 'react';

/**
 * 
 * 
 * 
In this example:

    <style>
        body {
            height: 2000px; ----> Making the body taller than the viewport 
        }
    </style>

The body element has a height of 2000px, which is taller than the viewport height (usually around 600-800px depending on the device).


The window.onscroll event is used to detect when the user scrolls the page.

Inside the onscroll event handler, the condition window.innerHeight + window.scrollY >= window.document.body.offsetHeight is checked.

When the user scrolls down to the bottom of the page, the condition becomes true because:

window.innerHeight is the height of the viewport (e.g., 800px).

window.scrollY is the number of pixels the user has scrolled from the top (e.g., 1200px when at the bottom).

window.document.body.offsetHeight is the height of the body element (2000px).

So, 800px (viewport height) + 1200px (scroll position) = 2000px, which is equal to the height of the body element. This triggers the alert to show the message "You've reached the bottom of the page!".

 * 
 */
const InfiniteScroll = () => {
    const [count, setCount] = useState(50);

    // listen to window's scroll event and add 50 more items when the user reaches to the end
    useEffect(() => {
        // event handler
        const onScroll = () => {
            // window.innerHeight: This property returns the interior height of the window in pixels, including the height of the horizontal scrollbar, if present. window.innerHeight is the height of the viewport (e.g., 800px).

            //  window.scrollY: This property returns the number of pixels that the document is currently scrolled vertically. window.scrollY is the number of pixels the user has scrolled from the top (e.g., 1200px when at the bottom).

            //  window.document.body.offsetHeight: This property returns the height of the body element in pixels, including padding but not including borders, margins, or horizontal scrollbars. is the height of the body element (2000px).

            // if scrolled to the bottom, add 50 more items
            if (
                window.innerHeight + window.scrollY >=
                window.document.body.offsetHeight
            ) {
                setCount((count) => count + 50);
            }
        };

        // add event listener
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [count]);

    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(<div key={i}>{i + 1}</div>);
    }
    console.log(elements);
    return <div>{elements}</div>;
};

export default InfiniteScroll;
