import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);

    // handle LogOUt
    const handleLogOUt = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const navItems = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to='/all-toys'
                className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}>
                All Toys
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}>
                Blog
            </NavLink>
        </li>
        {
            user ? <>
                <li>
                    <NavLink
                        to='/my-toys'
                        className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}>
                        My Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/add-a-toys'
                        className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}>
                        Add A Toys
                    </NavLink>
                </li>
            </> :
                <></>
        }
        <li>
            <NavLink
                to='/register'
                className={({ isActive }) => isActive ? "font-bold text-secondary" : ""}>
                Register
            </NavLink>
        </li>
    </>

    return (
        <nav className="navbar bg-base-100 px-4 md:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'><img className='h-14' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                            <img className='rounded-full w-10 h-10 mr-3' src={user?.photoURL} alt="User image" />
                        </div>
                        <button onClick={handleLogOUt} className='md:btn btn btn-sm'>Logout</button>
                    </> :
                        <Link to='/login'>
                            <button className='md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md'>Login</button>
                        </Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;