import React from 'react';
import { Link } from 'react-router-dom';

const BookName = ({ s }) => {
    const { name } = s
    return (
        <div>
            <div className="flex flex-col max-w-md space-y-4 divide-y sm:w-96 sm:p-5 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <ul className="flex flex-col space-y-2">
                    <li className="flex items-start justify-between">
                        <h3><Link to={`/storie/${s.id}`}>{name}</Link></h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BookName;