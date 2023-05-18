import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assets/loginReg.jpg'
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const { createdByEmailPass, updateUserInfo } = useContext(Authcontext);
    const [passwordType, setPasswordType] = useState('password');


    // Toast
    const notify = () => toast.success("Registration Successful", {
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

    // handle submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createdByEmailPass(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
                form.reset();
                // update profile
                updateUserInfo(name, photo)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

        // console.log(name, email, password, photo)
    }


    return (
        <div className="hero my-10">
            <div className="hero-content w-3/4">
                <div>
                    <img className='w-[600px]' src={img} alt="" />
                </div>
                <div className="card md:w-1/2 shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body">
                        <div>
                            <h1 className="text-4xl font-bold mb-3">Register</h1>
                            <p>Already have an account?  <Link className='text-secondary' to='/login'>Login</Link></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" required className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} name='password' placeholder="Password" required className="input input-bordered pr-10" />
                            <div className="absolute right-1 top-11 p-2 rounded-md" onClick={handlePassType}>
                                {
                                    passwordType === 'password' ?
                                        <span>  < FaEye ></FaEye></span>
                                        :
                                        <span> <FaEyeSlash></FaEyeSlash></span>
                                }
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 btn-secondary rounded-lg">Register</button>
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

export default Register;