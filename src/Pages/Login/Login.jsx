import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assets/loginReg.jpg'
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInByEmailPass } = useContext(Authcontext);
    const [passwordType, setPasswordType] = useState('password');


    // Toast
    const notify = () => toast.success("Successfully Login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // handle password type change
    const handlePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }

    // handle login
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // email password signIn
        signInByEmailPass(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                notify();
                form.reset();
                location.reload();
            })
            .catch(error => {
                console.log(error.message)

            })
        // console.log(email, password)
    }

    return (
        <div className="hero mt-10">
            <div className="hero-content w-3/4">
                <div>
                    <img className='w-[500px]' src={img} alt="" />
                </div>
                <div className="card md:w-1/2 shadow-2xl">

                    <form onSubmit={handleSignIn} className="card-body">
                        <div>
                            <h1 className="text-4xl font-bold mb-3">Login</h1>
                            <p>Don't have an account? <Link className='text-secondary' to='/register'>Register Now</Link></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} name='password' placeholder="password" required className="input input-bordered pr-10" />
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
                            {/* toast */}
                            <ToastContainer />
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex justify-center items-center btn btn-outline btn-light'>
                            <div>
                                <FaGoogle></FaGoogle>
                            </div>
                            <button className='ml-4'>
                                Continue With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;