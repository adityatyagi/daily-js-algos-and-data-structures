import { NavLink, Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                }}
            >
                <p>
                    <NavLink to="/auth/login">Login</NavLink>
                </p>
                <p>
                    <NavLink to="/auth/signup">Singup</NavLink>
                </p>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
