import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoute;