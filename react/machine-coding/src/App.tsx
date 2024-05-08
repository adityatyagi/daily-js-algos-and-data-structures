import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen p-5 m-5">
        <h2>Machine Coding</h2>
        <ul className="list-disc">
          <li>
            <Link className="text-blue-900 underline" to="/accordian">
              Accordian
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
