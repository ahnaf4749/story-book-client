import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const [error, setError] = useState('')
    const [accpted, setAccpted] = useState(false);
    const { googleProviderLogin, logIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()

    const handleAddToLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGooglrLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleClicked = e => {
        setAccpted(e.target.checked);
    }

    return (
        <div>
            <form onSubmit={handleAddToLogin}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Please Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <p className='font-semibold text-xl'>Sign in to our platform</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold"> Your Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Your Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <div className="flex items-start mt-3">
                                        <div className="flex items-center h-5">
                                            <input onClick={handleClicked} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" disabled={!accpted}>Login to your account</button>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <Link to='/registar' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                                </div>
                                <div className="text-sm font-medium text-red-500 dark:text-gray-300">
                                    {error}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='sumu'>
                <div>
                    <button onClick={handleGooglrLogin} className="btn btn-outline btn-info"><FaGoogle></FaGoogle>Goole login</button>
                </div>
                <div >
                    <button className="btn btn-outline"><FaGithub></FaGithub> Github login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;