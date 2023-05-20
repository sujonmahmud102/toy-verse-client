import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);

    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>;
    }
    
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;