import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registar = () => {
    const [error, setError] = useState('')
    const [accpted, setAccpted] = useState(false);
    const { creatUser, userProfile } = useContext(AuthContext);

    const handleAddToRegistar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handleProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const handleCheack = e => {
        setAccpted(e.target.checked)
    }

    return (
        <form onSubmit={handleAddToRegistar}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Registar now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <p className='font-semibold text-xl'>Sign in to our platform</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Your photo link " className="input input-bordered" />
                            </div>
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
                                        <input onClick={handleCheack} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={!accpted} className="btn btn-primary">Login to your account</button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Already have account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Please login</Link>
                            </div>
                            <div className="text-sm font-medium text-red-500 dark:text-gray-300">
                                {error}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registar;