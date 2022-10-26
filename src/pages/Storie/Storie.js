import React from 'react';
import { Link } from 'react-router-dom';

const Storie = ({ storie }) => {
    const { name, image, id } = storie;
    return (
        <div className="card w-56 bg-base-100 shadow-xl">
            <Link to={`/storie/${id}`}>
                <figure><img style={{ height: '200px' }} src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <p className="card-title text-center">{name}</p>
                </div>
            </Link>
        </div>

    );
};

export default Storie;