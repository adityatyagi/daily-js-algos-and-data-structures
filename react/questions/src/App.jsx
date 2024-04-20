import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useCustomUseEffect from './hooks/useCustomUseEffect';

function App() {
    const [count, setCount] = useState(0);
    const [count1] = useState(0);

    // useEffect(() => {
    //   console.log('rendered');
    // }, [count]);

    useCustomUseEffect(
        function callback() {
            console.log('custom useEffect rendered', count);

            return function cleanUp() {
                console.log('cleanup invoked');
            };
        },
        [count]
    );

    return (
        <>
            <div>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img
                            src={viteLogo}
                            className="logo"
                            alt="Vite logo"
                        />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test
                        HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <p>count: {count1}</p>
            </div>
        </>
    );
}

export default App;
