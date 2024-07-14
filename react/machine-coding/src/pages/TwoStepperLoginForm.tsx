import { useState } from 'react';

const EmailField = () => {
    const [email, setEmail] = useState<string>('');
    return (
        <div className="flex flex-col gap-3">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="grow"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </label>
        </div>
    );
};

const PasswordField = () => {
    const [password, setPassword] = useState<string>('');
    return (
        <div className="flex flex-col gap-3">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="password"
                    placeholder="Password"
                    className="input w-full max-w-xs"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </label>
        </div>
    );
};

const TwoStepperLoginForm = () => {
    // keeping a track of the step
    const [step, setStep] = useState(0);

    // form submit handler
    const handleSubmit = () => {};

    return (
        <div className="flex justify-center h-full items-center flex-col gap-3">
            {/* if step === 0 render email else render password */}
            {step === 0 ? <EmailField /> : <PasswordField />}
            <div className="flex justify-between">
                <button
                    className="btn btn-link"
                    onClick={() => setStep(0)}
                >
                    Cancel
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        step === 0 ? setStep(1) : handleSubmit
                    }
                >
                    {step === 0 ? 'Next' : 'Submit'}
                </button>
            </div>
        </div>
    );
};

export default TwoStepperLoginForm;
