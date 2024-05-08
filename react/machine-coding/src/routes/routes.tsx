import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Accordian from "../pages/Accordian";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <App />,
      },
      {
        path: "/accordian",
        element: <Accordian />,
      },
    ],
  },
]);

export default router;
