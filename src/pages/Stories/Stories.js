import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookName from '../BookName/BookName';
import Storie from '../Storie/Storie';

const Stories = () => {
    const stories = useLoaderData();
    // console.log(stories);
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-4 sm:gap-1 mt-8'>
            <div className='bg-lime-200 rounded shadow-2xl'>
                <h2 className="text-2xl font-semibold text-center">Books name</h2>
                <div >
                    {
                        stories.map(s => <BookName s={s}></BookName>)
                    }
                </div>
            </div>
            <div className='lg:col-span-3 sm:col-span-1 md:col-span-2'>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 lg:gap-x-3 sm:gap-x-1 lg:gap-y-12 sm:gap-y-1'
                >
                    {
                        stories.map(storie => <Storie
                            key={storie.id}
                            storie={storie}
                        ></Storie>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Stories;