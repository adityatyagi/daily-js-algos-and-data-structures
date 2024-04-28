import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    // create a signup form and on submit, redirect to contact us
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log([username, password]);

        // used from the "name" attribute of the inputs
        console.log([
            event.target.username.value,
            event.target.password.value,
        ]);
        navigate('/contact');
    };
    return (
        <>
            <h1>Signup</h1>
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

export default Signup;
