import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    </ul>
                </div>
                <div className="navbar-end lg:flex">
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <Link className='font-bold' to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link className='font-bold' to='/registar'>Registar</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p>profile</p>
                            </li>
                            <li><p>profile</p></li>
                            <li><p>profile</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;