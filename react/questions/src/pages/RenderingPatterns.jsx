import { useEffect, useState } from 'react';
import PostsListWithData from '../data/PostsListsWithData';
import UsersListWithData from '../data/UsersListWithData';
const RenderingPatterns = () => {
    return (
        <div>
            {/* <Users /> */}
            <div>
                <h3>Posts</h3>
                <PostsListWithData />
                <hr />
                <h3>Users</h3>
                <UsersListWithData />
            </div>
        </div>
    );
};

// custom hook to get data hook/view pattern : alternative to HOC pattern
const useUser = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUserData(data));
    }, []);
    return userData;
};

// container - class based
const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <UsersList list={users} />
        </div>
    );
};

// presentaional
function UsersList({ list }) {
    const userData = useUser();
    return (
        <div>
            {list.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
            {userData.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}

            <hr />
        </div>
    );
}

export default RenderingPatterns;
