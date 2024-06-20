import { cloneElement, ReactElement, useState } from 'react';
import './stepper.styles.css';
const ExampleStep1 = ({
    prev,
    next,
}: {
    prev?: () => void;
    next?: () => void;
}) => {
    return (
        <div className="exampleStepComponent">
            <h1>Step 1</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
const ExampleStep2 = ({
    prev,
    next,
}: {
    prev?: () => void;
    next?: () => void;
}) => {
    return (
        <div className="exampleStepComponent">
            <h1>Step 2</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
const ExampleStep3 = ({
    prev,
    next,
}: {
    prev?: () => void;
    next?: () => void;
}) => {
    return (
        <div className="exampleStepComponent">
            <h1>Step 3</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
const ExampleStep4 = ({
    prev,
    next,
}: {
    prev?: () => void;
    next?: () => void;
}) => {
    return (
        <div className="exampleStepComponent">
            <h1>Step 4</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
export default function Stepper() {
    const list = [
        <ExampleStep1 />,
        <ExampleStep2 />,
        <ExampleStep3 />,
        <ExampleStep4 />,
    ];
    return (
        <div>
            <StepperComponent list={list} />
        </div>
    );
}

function StepperComponent({ list }: { list: ReactElement[] }) {
    const [currentStep, setCurrentStep] = useState(0);
    const listLength = list.length;

    // stepper render logic
    const allSteps = [];
    for (let i = 0; i < listLength; i++) {
        allSteps.push(
            <div
                className="step"
                key={i}
                onClick={() => setCurrentStep(i)}
            >
                {i + 1}
            </div>
        );
    }
    const widthChange = (100 / (listLength - 1)) * currentStep;
    const stepperProgressLine = widthChange;

    const prev = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const next = () => {
        setCurrentStep((prevStep) =>
            Math.min(prevStep + 1, listLength - 1)
        );
    };

    return (
        <div>
            <div className="stepsContainer">
                {allSteps}
                <div
                    className="stepperProgressLine"
                    style={{ width: `${stepperProgressLine}%` }}
                ></div>
            </div>
            <div className="stepsComponentContainer">
                {cloneElement(list[currentStep], {
                    prev,
                    next,
                })}
            </div>
        </div>
    );
}
