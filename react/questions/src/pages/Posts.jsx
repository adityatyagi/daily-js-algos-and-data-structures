import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/**
 * This component is used to render the Posts page.
 * @function
 * @returns {JSX.Element} - Rendered Posts component
 */
const Posts = () => {
    // https://jsonplaceholder.typicode.com/posts
    const [postsData, setPostsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchPosts() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            if (!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            setPostsData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    // Render the Posts page
    return (
        <div>
            {/* Heading for the Posts page */}
            <h3>Posts</h3>
            {/* Link to the first post */}

            <ul>
                {postsData.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <Link
                                    className={({
                                        isActive,
                                        isLoading,
                                        isTransitioning,
                                    }) =>
                                        [
                                            isActive ? 'active' : '',
                                            isLoading
                                                ? 'loading'
                                                : '',
                                            isTransitioning
                                                ? 'isTransitioning'
                                                : '',
                                        ].join(' ')
                                    }
                                    to={`/posts/${item.id}`}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Posts;
