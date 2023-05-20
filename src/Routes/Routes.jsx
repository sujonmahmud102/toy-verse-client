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
import AddAToys from '../Pages/AddAToys/AddAToys';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';
import UpdateToy from '../Pages/MyToys/UpdateToy/UpdateToy';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';


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
            },
            {
                path: '/add-a-toys',
                element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
        ]
    }
])



export default router;