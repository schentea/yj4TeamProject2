import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotFound from './routes/NotFound';
import SignupForm from './routes/SignupForm';
import LoginForm from './routes/LoginForm';
import MyPage from './routes/MyPage';
import Kakao from './routes/Kakao';
import Google from './routes/Google';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <App />,
            },
            {
                path: '/register',
                element: <SignupForm />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/mypage',
                element: <MyPage />,
            },
            {
                path: 'socials/kakao',
                element: <Kakao />,
            },
            {
                path: 'socials/google',
                element: <Google />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
