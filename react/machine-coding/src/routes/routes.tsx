import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Accordian from '../pages/Accordian';
import Carousel from '../pages/Carousel';
import ErrorPage from '../pages/Error';
import Stepper from '../pages/Stepper/Stepper';
import SwitchCase from '../pages/SwitchCase';

// const SwitchCaseLazy = lazy(() => import('../pages/SwitchCase'));
// const AppLazy = lazy(() => import('../App'));
// const AccordianLazy = lazy(() => import('../pages/Accordian'));
// const CarouselLazy = lazy(() => import('../pages/Carousel'));
// const StepperLazy = lazy(() => import('../pages/Stepper/Stepper'));

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
            {
                path: '/switch-case',
                element: <SwitchCase />,
            },
        ],
    },
]);

// const router = createBrowserRouter([
//     {
//         path: '/',
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: '/',
//                 index: true,
//                 element: (
//                     <Suspense fallback="Loading...">
//                         <AppLazy />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: '/accordian',
//                 element: (
//                     <Suspense fallback="Loading...">
//                         <AccordianLazy />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: '/carousel',
//                 element: (
//                     <Suspense fallback="Loading...">
//                         <CarouselLazy />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: '/stepper',
//                 element: (
//                     <Suspense fallback="Loading...">
//                         <StepperLazy />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: '/switch-case',
//                 element: (
//                     <Suspense fallback="Loading...">
//                         <SwitchCaseLazy />
//                     </Suspense>
//                 ),
//             },
//         ],
//     },
// ]);

export default router;
