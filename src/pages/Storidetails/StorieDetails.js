import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const StorieDetails = () => {
    const storieDetail = useLoaderData()
    console.log(storieDetail);
    return (
        <div className='mx-auto w-3/4 mt-16 shadow-2xl'>
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-center'>{storieDetail.name}</h1>
            </div>
            <div className='mt-10'>
                <h4 className='text-2xl font-semibold text-center'>{storieDetail.title}</h4>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
                    <figure><img className='w-auto' src={storieDetail.image} alt="Album" /></figure>
                    <div className="card-body">
                        <p>{storieDetail.details}</p>
                        <div className='flex justify-between'>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-ghost rounded-1xl"><Link to='/stories'>Back To Stories</Link></button>
                            </div>
                            {
                                <div className="card-actions">
                                    <button className="btn btn-outline btn-ghost rounded-1xl"><Link to={`/terms/${storieDetail.id}`}>Premium acces</Link></button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorieDetails;