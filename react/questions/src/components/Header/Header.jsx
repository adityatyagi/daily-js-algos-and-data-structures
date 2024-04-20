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

            <ul>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </ul>
        </div>
    );
};

export default Header;
