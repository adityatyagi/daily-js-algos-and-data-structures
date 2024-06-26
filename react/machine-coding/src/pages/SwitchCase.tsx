import {
    Children,
    isValidElement,
    ReactElement,
    ReactNode,
} from 'react';

interface CustomCaseProps {
    value: string | ((value: number) => boolean);
    children: ReactNode;
}

interface DefaultCaseProps {
    children: ReactNode;
}

interface SwitchCaseComponentProps {
    value: string;
    children: ReactNode;
}

const SwitchCaseComponent: React.FC<SwitchCaseComponentProps> = ({
    value,
    children,
}) => {
    // create an array of matching custom cases with the value passed
    const cases: ReactElement[] = [];
    const defaults: ReactElement[] = [];

    Children.forEach(children, (child) => {
        // iterate over all children
        if (isValidElement(child)) {
            if (child.type === CustomCase) {
                if (typeof child.props.value === 'function') {
                    if (child.props.value(value)) {
                        cases.push(child);
                    }
                } else if (child.props.value === value) {
                    cases.push(child);
                }
            } else if (child.type === DefaultCase) {
                defaults.push(child);
            }
        }
    });

    if (cases.length > 0) {
        return cases;
    } else {
        return defaults;
    }
    return <div>SwitchCaseComponent</div>;
};

const CustomCase: React.FC<CustomCaseProps> = ({ children }) => {
    return <>{children}</>;
};

const DefaultCase: React.FC<DefaultCaseProps> = ({ children }) => {
    return <>{children}</>;
};
const SwitchCase = () => {
    return (
        <div>
            <SwitchCaseComponent value="99">
                <CustomCase value={(e: number) => e < 10}>
                    Case 1
                </CustomCase>
                <CustomCase value="20">Case 20</CustomCase>
                <CustomCase value="30">Case 30</CustomCase>
                <CustomCase value="1000">Case 1000</CustomCase>
                <DefaultCase>Default Case</DefaultCase>
            </SwitchCaseComponent>
        </div>
    );
};

export default SwitchCase;
