import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from 'react-router-dom';
import FeatureFlagContextProvider from './context/feature-flag-context.jsx';
import ThemeContextProvider from './context/theme-context.jsx';
import './index.css';
import {
    About,
    Auth,
    Contact,
    ErrorComponent,
    Home,
    Hooks,
    Login,
    Posts,
    PostsDetails,
    ProtectedRoutes,
    Signup,
    UseMemoComponent,
} from './pages';
import LRUCacheComponent from './pages/LRUCacheComponent.jsx';
import { postsLoader } from './pages/Posts.jsx';
import RenderingPatterns from './pages/RenderingPatterns.jsx';
import { postDetailsLoader } from './pages/postDetailsLoader.js';
import Root from './routes/Root.jsx';

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
                path: '/auth',
                element: <Auth />,

                children: [
                    {
                        index: true,
                        loader: () => redirect('/auth/login'), // directly takes the user to /login as soon as the user lands on /auth
                    },
                    {
                        path: 'login',
                        element: <Login />,
                    },
                    {
                        path: 'signup',
                        element: <Signup />,
                    },
                ],
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
                element: (
                    <ProtectedRoutes>
                        <Posts />
                    </ProtectedRoutes>
                ),
                loader: postsLoader,
            },
            {
                path: '/posts/:postsId',
                element: <PostsDetails />,
                loader: postDetailsLoader,
            },
            {
                path: '/rendering-patterns',
                element: <RenderingPatterns />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <FeatureFlagContextProvider>
                <RouterProvider router={router} />
            </FeatureFlagContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
