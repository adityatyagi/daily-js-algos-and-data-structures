import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    // states for api loading, post details and post comments
    const [isLoading, setIsLoading] = useState();
    const [postDetails, setPostDetails] = useState({});
    const [postComments, setPostComments] = useState([]);

    // get the post id
    const { postsId: id } = useParams();
    const [postsId] = useState(id);

    async function fetchData() {
        setIsLoading(true);
        Promise.all([
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${postsId}`
            ),
            fetch(
                `https://jsonplaceholder.typicode.com/posts/${postsId}/comments`
            ),
        ])
            .then(([postDetailsResponse, postCommentsResponse]) => {
                //check for errors
                if (!postDetailsResponse.ok)
                    throw new Error('Something went wrong');
                if (!postCommentsResponse.ok)
                    throw new Error('Something went wrong');

                // get data
                return Promise.all([
                    postDetailsResponse.json(),
                    postCommentsResponse.json(),
                ]);
            })
            .then(([postDetailsResponse, postCommentsResponse]) => {
                console.log(
                    '🚀 ~ fetchData ~ postDetailsResponse:',
                    postDetailsResponse
                );
                console.log(
                    '🚀 ~ fetchData ~ postCommentsResponse:',
                    postCommentsResponse
                );
                setPostComments(postCommentsResponse);
                setPostDetails(postDetailsResponse);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    // callbackedFetchData is recreated when postsId changes and hence it will re-run the useEffect
    const callbackedFetchData = useCallback(fetchData, [postsId]);

    useEffect(() => {
        callbackedFetchData();
    }, [callbackedFetchData]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <div>
                <h3>Details</h3>
                <p>{postDetails.body}</p>
                <hr />
                <h4>Comments</h4>
                <ul>
                    {postComments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostDetails;
