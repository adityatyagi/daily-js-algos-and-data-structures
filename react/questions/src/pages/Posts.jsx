import { Link, useLoaderData } from 'react-router-dom';
/**
 * This component is used to render the Posts page.
 * @function
 * @returns {JSX.Element} - Rendered Posts component
 */
const Posts = () => {
    // https://jsonplaceholder.typicode.com/posts
    // const [postsData, setPostsData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // async function fetchPosts() {
    //     try {
    //         const response = await fetch(
    //             'https://jsonplaceholder.typicode.com/posts'
    //         );
    //         if (!response.ok) throw new Error('Something went wrong');
    //         const data = await response.json();
    //         setPostsData(data);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchPosts();
    // }, []);

    const postsData = useLoaderData();

    // Render the Posts page
    return (
        <div>
            {/* Heading for the Posts page */}
            <h3>Posts</h3>
            {/* Link to the first post */}

            <ul>
                {postsData?.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <Link to={`/posts/${item.id}`}>
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

/**
 * Asynchronously loads posts from the specified URL.
 *
 * @return {Promise<Array>} An array of posts.
 */
export async function postsLoader() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) throw new Error('Something went wrong!!!!');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Response('Something went wrong', {
            status: 500,
            error,
        });
    }
    // const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/postss'
    // );
    // if (response.status === 404) {
    //     throw new Response('Not Found', { status: 404 });
    // }
    // if (!response.ok) {
    //     throw new Response('Something went wrong', { status: 400 });
    // }
    // return await response.json();
}

export default Posts;
