import { FC, PropsWithChildren } from 'react';
import FeatureFlagProvider, {
    useFeatureFlagContext,
    ValueType,
} from './FeatureFlagProvider';

type FeaturePropType = {
    feature: keyof ValueType;
    value: boolean;
};
const Feature: FC<PropsWithChildren<FeaturePropType>> = ({
    feature,
    value,
    children,
}) => {
    const features = useFeatureFlagContext();
    return features[feature] === value ? children : null;
};
const FeatureFlag = () => {
    return (
        <FeatureFlagProvider>
            <div>
                <div>
                    <Feature feature="theme" value={true}>
                        Theme Feature: Enabled
                    </Feature>
                </div>

                <div>
                    <Feature feature="chat" value={true}>
                        Chat Feature: Enabled
                    </Feature>
                </div>
            </div>
        </FeatureFlagProvider>
    );
};

export default FeatureFlag;
