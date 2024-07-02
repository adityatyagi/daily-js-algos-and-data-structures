import {
    Children,
    FC,
    isValidElement,
    PropsWithChildren,
    ReactElement,
} from 'react';

interface CustomCaseProps {
    value: string | ((value: number) => boolean);
}

type DeafultCase = PropsWithChildren<object>;

interface SwitchCaseComponentProps {
    value: string;
}

const SwitchCaseComponent: FC<
    PropsWithChildren<SwitchCaseComponentProps>
> = ({ value, children }) => {
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
};

const CustomCase: FC<PropsWithChildren<CustomCaseProps>> = ({
    children,
}) => {
    return <>{children}</>;
};

const DefaultCase: FC<DeafultCase> = ({ children }) => {
    return <>{children}</>;
};
const SwitchCase = () => {
    return (
        <div>
            <SwitchCaseComponent value="20">
                <CustomCase value={(e: number) => e < 10}>
                    CustomCase Case 1
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
