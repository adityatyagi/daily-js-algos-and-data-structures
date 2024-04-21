import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    About,
    Contact,
    ErrorNotFound,
    Home,
    UseMemoComponent,
} from './pages';
import './index.css';
import ThemeContextProvider from './context/theme-context.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorNotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/use-memo',
                element: <UseMemoComponent />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    </React.StrictMode>
);
