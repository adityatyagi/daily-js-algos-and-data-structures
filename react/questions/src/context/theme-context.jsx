import {
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
const ThemeContextProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    function toggleTheme() {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }
    const theme = isDarkTheme ? 'dark' : 'light';
    const valueForContext = {
        theme,
        toggleTheme,
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkTheme, theme]);

    return (
        <ThemeContext.Provider value={valueForContext}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
