import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    // use to navigate the user back to the page he requested (if he did) and is redirected to /login
    const navigate = useNavigate();
    const location = useLocation();

    // create a login form and on submit, redirect to contact us
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log([username, password]);

        // used from the "name" attribute of the inputs
        console.log([
            event.target.username.value,
            event.target.password.value,
        ]);
        localStorage.setItem('loggedIn', true);

        // get the state from the previous page and go back to it, and if its not there, then go to index
        const goBackTo = location.state?.from?.pathname || '/';
        navigate(goBackTo);
    };

    // if the user is loggedIn, then redirect to home
    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {
            console.log('test');
            navigate('/');
        }
    }, []);
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={(event) =>
                            setUsername(event.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Login;
