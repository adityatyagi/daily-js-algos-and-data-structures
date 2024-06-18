import withFetchData from '../hoc/withFetchData';
import withStyles from '../hoc/withStyles';

function UsersList({ style, data }) {
    console.log('🚀 ~ UsersList ~ list:', data);
    return (
        <div>
            {data.map((item) => (
                <p style={{ margin: '1rem', ...style }} key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    );
}

const UsersListWithData = withFetchData(
    'https://jsonplaceholder.typicode.com/users',
    withStyles(UsersList)
);

export default UsersListWithData;
