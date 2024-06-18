import withFetchData from '../hoc/withFetchData';

function UsersList({ data }) {
    console.log('🚀 ~ UsersList ~ list:', data);
    return (
        <div>
            {data.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
}

const UsersListWithData = withFetchData(
    'https://jsonplaceholder.typicode.com/users',
    UsersList
);

export default UsersListWithData;
