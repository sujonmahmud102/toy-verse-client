import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assets/loginReg.jpg'
import { Authcontext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const { createdByEmailPass, updateUserInfo, createdByGoogle } = useContext(Authcontext);
    const [passwordType, setPasswordType] = useState('password');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');


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
                setPassError('');
                notify();
                form.reset();
                location.reload();
                // update profile
                updateUserInfo(name, photo)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error);
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setPassError('');
                    setEmailError('Please provide valid email format')
                }
                else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setPassError('');
                    setEmailError('Already account created for this email')
                }
                else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setEmailError('');
                    setPassError('Password should be at least 6 characters')
                }
                else {
                    setPassError('');
                }

            })

        // console.log(name, email, password, photo)
    }

    // user create by google
    const registerByGoogle = () => {
        createdByGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <section className='px-4 py-6 md:py-12 md:px-16'>
            <div className="hero mt-5">
                <div className="w-3/4 flex items-center  bg-base-100">
                    <div>
                        <img className='w-[600px]' src={img} alt="" />
                    </div>
                    <div className="md:w-1/2 shadow-2xl">
                        <div>
                            <div className="card-body border-solid border-2 rounded-lg">
                                <div>
                                    <h1 className="text-4xl font-bold mb-3">Register</h1>
                                    <p>Already have an account?  <Link className='text-secondary' to='/login'>Login</Link></p>
                                </div>
                                {/* form start */}
                                <form onSubmit={handleSubmit} >
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
                                        <p className='text-red-500 text-sm'>
                                            <small>{emailError}</small>
                                        </p>
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type={passwordType} name='password' placeholder="Password" required className="input input-bordered pr-10" />
                                        <p className='text-red-500 text-sm'>
                                            <small>{passError}</small>
                                        </p>
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
                                </form>
                                {/* form end */}
                                <div>
                                    <div className="divider">OR</div>
                                    <div onClick={registerByGoogle} className='flex justify-center items-center btn btn-outline btn-light'>
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
                </div>
            </div>
        </section>
    );
};

export default Register;