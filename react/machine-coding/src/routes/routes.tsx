import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Accordian from '../pages/Accordian';
import Carousel from '../pages/Carousel';
import ErrorPage from '../pages/Error';
import Stepper from '../pages/Stepper/Stepper';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                index: true,
                element: <App />,
            },
            {
                path: '/accordian',
                element: <Accordian />,
            },
            {
                path: '/carousel',
                element: <Carousel />,
            },
            {
                path: '/stepper',
                element: <Stepper />,
            },
        ],
    },
]);

export default router;
