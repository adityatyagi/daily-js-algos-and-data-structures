import {
    createContext,
    useCallback,
    useContext,
    useState,
} from 'react';

export const FeatureFlagContext = createContext(null);

const FeatureFlagContextProvider = ({ children }) => {
    const [featureFlags, setFeatureFlags] = useState({
        chatEnabled: false,
        darkModeEnabled: false,
    });
    const toggleChat = useCallback(() => {
        setFeatureFlags((prevFlags) => ({
            ...prevFlags,
            chatEnabled: !prevFlags.chatEnabled,
        }));
    }, []);

    const toggleDarkMode = useCallback(() => {
        setFeatureFlags((prevFlags) => ({
            ...prevFlags,
            darkModeEnabled: !prevFlags.darkModeEnabled,
        }));
    }, []);

    return (
        <FeatureFlagContext.Provider
            value={{ ...featureFlags, toggleChat, toggleDarkMode }}
        >
            {children}
        </FeatureFlagContext.Provider>
    );
};

export const useFeatureFlagContext = () =>
    useContext(FeatureFlagContext);

export default FeatureFlagContextProvider;
