import React, { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assets/loginReg.jpg'

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    // handle password type change
    const handlePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }
    return (
        <div className="hero mt-10">
            <div className="hero-content w-3/4">
                <div>
                    <img className='w-[500px]' src={img} alt="" />
                </div>
                <div className="card md:w-1/2 shadow-2xl">

                    <div className="card-body">
                        <div>
                            <h1 className="text-4xl font-bold mb-3">Login</h1>
                            <p>Don't have an account? <Link className='text-secondary' to='/register'>Create an account</Link></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} placeholder="password" className="input input-bordered pr-10" />
                            <div className="absolute right-1 top-11 p-2 rounded-md" onClick={handlePassType}>
                                {
                                    passwordType === 'password' ?
                                        <span>  < FaEye ></FaEye></span>
                                        :
                                        <span> <FaEyeSlash></FaEyeSlash></span>
                                }
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 btn-secondary rounded-lg">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div  className='flex justify-center items-center btn btn-outline btn-light'>
                            <div>
                                <FaGoogle></FaGoogle>
                            </div>
                            <button className='ml-4'>
                                Continue With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;