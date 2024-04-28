import { Outlet, useNavigation } from 'react-router-dom';
import './styles.css';
import { Loader, Header } from '../components';

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
