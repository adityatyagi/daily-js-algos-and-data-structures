import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    About,
    Contact,
    Home,
    Hooks,
    Posts,
    PostsDetails,
    UseMemoComponent,
    ErrorComponent,
} from './pages';
import './index.css';
import ThemeContextProvider from './context/theme-context.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root.jsx';
import LRUCacheComponent from './pages/LRUCacheComponent.jsx';
import { postsLoader } from './pages/Posts.jsx';
import { postDetailsLoader } from './pages/postDetailsLoader.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorComponent />,
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
            {
                path: '/custom-hooks',
                element: <Hooks />,
            },
            {
                path: '/lru',
                element: <LRUCacheComponent />,
            },
            {
                path: '/posts',
                element: <Posts />,
                loader: postsLoader,
            },
            {
                path: '/posts/:postsId',
                element: <PostsDetails />,
                loader: postDetailsLoader,
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
