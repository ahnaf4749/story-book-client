import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Storie from '../Storie/Storie';

const Stories = () => {
    const stories = useLoaderData();
    console.log(stories);
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-4 sm:gap-1'>
            <div>
                {
                    stories.map(s => <Link to={`/storie/${s.id}`}><p>{s.name}</p></Link>)
                }
            </div>
            <div className='lg:col-span-3 sm:col-span-1 md:col-span-2'>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 lg:gap-x-3 sm:gap-x-1 lg:gap-y-12 sm:gap-y-1'
                >
                    {
                        stories.map(storie => <Storie
                            storie={storie}
                        ></Storie>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Stories;