import withFetchData from '../hoc/withFetchData';

const PostsList = ({ data }) => {
    return (
        <ul>
            {data.map((item) => {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    );
};

const PostsListWithData = withFetchData(
    'https://jsonplaceholder.typicode.com/posts',
    PostsList
);

export default PostsListWithData;
