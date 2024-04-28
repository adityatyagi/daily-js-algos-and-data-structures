import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const location = useLocation();
    // const navigate = useNavigate();
    if (!localStorage.getItem('loggedIn')) {
        return (
            <Navigate
                replace={true}
                to="/auth/login"
                // sending meta data to the next location /auth/login so that the user can come back to the route he was redirected from
                state={{
                    from: location,
                }}
            />
        );
    }
    return children;
};

export default ProtectedRoutes;
