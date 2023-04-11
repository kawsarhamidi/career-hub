import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = ({ params }) => {
    const jobDetails = useLoaderData();
    const [jobData, setJobData] = useState({});
    let { detailId } = useParams();
    console.log(detailId);
    useEffect(() => {
        fetch("../jobs.json")
            .then(res => res.json())
            .then(data => {
                const single = data.find(jobData => jobData.id == detailId)
                if (single) {
                    setJobData(single)
                }
                else {
                    setJobData({})
                }
            })

    }, [])
    // console.log(jobData);
    return (
        <div className=' flex'>
            <div className=" w-9/12 m-8">
                <p><span className='font-bold'>Job Description:</span> {jobData.job_description}</p>
                <p><span className='font-bold'>Job Responsibility:</span> {jobData.job_responsibility}</p>
                <p><span className='font-bold'>Educational Requirements:</span>  {jobData.educational_requirements}</p>
                <p><span className='font-bold'>Job Experiences:  
                 </span>{jobData.experiences}</p>

            </div>
            <div className="w-3/12 m-8 bg-orange-500 p-4 rounded-lg">
                    <p className='font-bold text-lg'>job Details</p>
                    <br />
                    <p><span className='font-bold'>Salary: </span> {jobData.salary}</p>
                    <p><span className='font-bold'>Job Title: </span> {jobData.job_title}</p>
                    <p className='font-bold text-lg mt-4'>Contact Information</p>
                    <br />
                    <p><span className='font-bold'>Phone: </span> {jobData.phone}</p>
                    <p><span className='font-bold'>Email: </span> {jobData.email}</p>
                    <p> <span className='font-bold'>Address:</span> {jobData.location}</p>
                    <button className='btn w-full my-4 bg-primary'>Apply Now</button>
            </div>
        </div>
    );
};

export default Details;