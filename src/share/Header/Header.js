import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className='font-bold' to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link className='font-bold' to='/stories'>Stories</Link>
                            </li>
                            <li>
                                <Link className='font-bold' to='/faq'>Faq</Link>
                            </li>
                            <li>
                                <Link className='font-bold' to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/home'><label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="h-12">
                            <img src="https://i.ibb.co/wKKqswP/dribbble-portfolio-removebg-preview.png" alt='' />
                        </div>
                        <p className='font-bold'>Story Book</p>
                    </label></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link className='font-bold' to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link className='font-bold' to='/stories'>Stories</Link>
                        </li>
                        <li>
                            <Link className='font-bold' to='/faq'>Faq</Link>
                        </li>
                        <li>
                            <Link className='font-bold' to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>Light</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                                <span>Dark</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end lg:flex">
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {
                                user?.uid ?
                                    <>
                                        <button onClick={handleLogOut} className="btn btn-ghost font-bold">Log out</button>
                                    </> :
                                    <>
                                        <li>
                                            <Link className='font-bold' to='/login'>Login</Link>
                                        </li>
                                        <li>
                                            <Link className='font-bold' to='/registar'>Registar</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt='' /> :
                                        <FaUser></FaUser>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p>{user?.displayName}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;