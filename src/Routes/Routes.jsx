import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
])



export default router;