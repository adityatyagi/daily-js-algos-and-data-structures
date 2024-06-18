import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loader } from '../components';
import './styles.css';

const Root = () => {
    const navigate = useNavigation();
    const loadingState = navigate.state === 'loading';
    return (
        <div>
            <Header />
            {/* Loading */}
            {loadingState && <Loader />}
            <Outlet />
        </div>
    );
};

export default Root;
