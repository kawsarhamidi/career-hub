import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div className=''>
           <p>{jobs.length}</p>
        </div>
    );
};

export default Home;