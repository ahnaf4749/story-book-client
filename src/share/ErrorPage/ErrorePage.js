import React from 'react';
import { Link } from 'react-router-dom';
import './Errorpage.css'

const ErrorePage = () => {
    return (
        <div className='error-btn'>
            <h1 className='text-6xl'>404 page not found</h1>
            <button type="button" className="px-8 py-3 font-semibold dark:bg-gray-100 dark:text-gray-800 error text-center rounded"><Link to='/home'>Go TO Home</Link></button>
        </div>
    );
};

export default ErrorePage;