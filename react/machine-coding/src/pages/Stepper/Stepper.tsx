import './stepper.styles.css';

import { cloneElement, ReactElement, useState } from 'react';

// making 4 example steps

const ExampleStep1 = ({
    prev,
    next,
}: {
    prev?: () => void;
    next?: () => void;
}) => {
    return (
        <div className="exampleStepComponent">
            Step 1{' '}
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
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
            Step 2{' '}
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
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
            Step 3{' '}
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
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
            Step 4
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};
const Stepper = () => {
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
};

const StepperComponent = ({ list }: { list: ReactElement[] }) => {
    // tracking the current state
    const [currentStep, setCurrentStep] = useState(0);

    // render all steps dynamically
    const allStep = [];
    for (let i = 0; i < list.length; i++) {
        allStep.push(
            <button
                className={`step ${
                    currentStep >= i ? 'active' : ''
                }  ${currentStep === i ? 'current' : ''}`}
                key={i}
                onClick={() => setCurrentStep(i)}
            >
                {i + 1}
            </button>
        );
    }

    const widthChange = (100 / (list.length - 1)) * currentStep;
    const stepperProgressLine = widthChange;

    const prev = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const next = () => {
        setCurrentStep((prevStep) =>
            Math.min(prevStep + 1, list.length - 1)
        );
    };

    return (
        <div>
            {/* stepper header with steps */}
            <div className="stepperHeader">
                {allStep}

                <div
                    className="stepperProgressLine"
                    style={{
                        width: `${stepperProgressLine}%`,
                    }}
                ></div>
            </div>
            {/* render step component based on current step */}
            {cloneElement(list[currentStep], {
                prev,
                next,
            })}
        </div>
    );
};

export default Stepper;
