import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Main from '../Pages/Layout/Main';
import Register from '../Pages/Login/Register';
import Login from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllToys from '../Pages/AllToys/AllToys';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            }
        ]
    }
])



export default router;