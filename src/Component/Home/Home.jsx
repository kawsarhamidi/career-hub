import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import Category from '../Category/Category';

const Home = () => {
    const jobs = useLoaderData();
    
    return (
        <div className=''>
           <div className='md:flex md:justify-around'>
            <div className="">
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary'>Get Started</button>
           </div>
           <div className="">
                <img src="../../../public/hardy.png" alt="" />
           </div>
        </div>
        <div className="">
            <div className="my-10">
            <p className='flex font-bold text-5xl justify-center text-center'>job category</p>
        <p></p>
            </div>
        <div className="grid md:grid-cols-4 gap-5">
            {
                jobs.map(category => <Category
                key={category.id}
                category={category}
                ></Category> )
            }
        </div>
        </div>
        <div className="">
            <div className="my-10">
            <p className='my-10 file:flex font-bold text-5xl justify-center text-center'>job title</p>
                <p></p>
            </div>
        <div className="grid grid-cols-2 gap-4 ">
        {
            jobs.map(job => <Job
            key={job.id}
            job={job}
            ></Job>)
        }
        </div>
        </div>
        
        </div>
    );
};

export default Home;