import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <div className="h-screen p-5 m-5">
                <h2>Machine Coding</h2>
                <ul className="list-disc">
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/accordian"
                        >
                            Accordian
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/carousel"
                        >
                            Carousel
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/stepper"
                        >
                            Stepper
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/switch-case"
                        >
                            SwitchCase
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/feature-flag"
                        >
                            Feature Flag
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/infinite-scroll"
                        >
                            Infinite Scroll
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-blue-900 underline"
                            to="/two-stepper-form"
                        >
                            Two Stepper Form
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default App;
