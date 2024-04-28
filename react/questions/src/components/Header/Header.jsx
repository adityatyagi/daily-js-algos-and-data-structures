import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../../context/theme-context';
import './header.css';
const Header = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div id="header">
            <div>
                Dark Theme:{' '}
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
            </div>

            <ul className="navlist">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/lru">LRU</NavLink>
                <NavLink to="/auth">Auth</NavLink>
            </ul>
        </div>
    );
};

export default Header;
