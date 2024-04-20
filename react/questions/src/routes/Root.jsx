import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './styles.css';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;
