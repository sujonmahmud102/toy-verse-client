import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg'
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='text-center mb-10'>
            <img className='md:w-2/5 mx-auto' src={error} alt="" />
            <Link to='/'> <button className='btn btn-warning md:w-1/3'>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;