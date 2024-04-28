/**
 * A function to fetch the post details and comments from the jsonplaceholder
 * API.
 *
 * @param {object} params - The route params.
 * @param {number} params.postsId - The post id.
 * @returns {Promise<[object, object]>} - A promise that resolves to an array
 * with the post details and comments data.
 */
export async function postDetailsLoader({ params }) {
    return Promise.all([
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
        ),
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postsId}/comments`
        ),
    ])
        .then(([postDetailsResponse, postCommentsResponse]) => {
            // Check for errors
            if (!postDetailsResponse.ok) {
                throw new Error('Something went wrong');
            }
            if (!postCommentsResponse.ok) {
                throw new Error('Something went wrong');
            }

            // Get data
            return Promise.all([
                postDetailsResponse.json(),
                postCommentsResponse.json(),
            ]);
        })
        .then(([postDetailsResponse, postCommentsResponse]) => {
            // Log the data.
            console.log(
                '🚀 ~ fetchData ~ postDetailsResponse:',
                postDetailsResponse
            );
            console.log(
                '🚀 ~ fetchData ~ postCommentsResponse:',
                postCommentsResponse
            );
            return [postDetailsResponse, postCommentsResponse];
        })
        .catch((error) => {
            throw new Error(error);
        });
}
