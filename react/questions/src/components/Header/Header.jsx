import { NavLink } from 'react-router-dom';
import { useFeatureFlagContext } from '../../context/feature-flag-context';
import { useThemeContext } from '../../context/theme-context';
import './header.css';

const Header = () => {
    const { theme, toggleTheme } = useThemeContext();
    const { chatEnabled, toggleChat } = useFeatureFlagContext();
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

            <div>
                Chat Enabled: :
                <input
                    type="checkbox"
                    name="chatEnaled"
                    checked={chatEnabled}
                    onChange={toggleChat}
                />
            </div>

            <ul className="navlist">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/lru">LRU</NavLink>
                <NavLink to="/auth">Auth</NavLink>
                <NavLink to="/rendering-patterns">
                    Rendering Patterns
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;
