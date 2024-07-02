import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
} from 'react';

export interface ValueType {
    theme: boolean;
    chat: boolean;
}

const defaultValue: ValueType = {
    theme: false,
    chat: false,
};

const FeatureFlagContext = createContext<ValueType>(defaultValue);

const FeatureFlagProvider: FC<PropsWithChildren> = ({ children }) => {
    // get the features from an API
    const value: ValueType = {
        theme: true,
        chat: false,
    };
    return (
        <FeatureFlagContext.Provider value={value}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

export const useFeatureFlagContext = (): ValueType =>
    useContext(FeatureFlagContext);

export default FeatureFlagProvider;
