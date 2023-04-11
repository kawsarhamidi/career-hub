import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = job;
    const navigator = useNavigate();
    return (
        <div className='card bg-orange-400'>
            <div className="card-body">
                
            <img className='h-10 w-28' src={company_logo} alt="" />
            <p>{job_title}</p>
            <p>{company_name}</p>
            <div className="flex">
                <button className='btn mr-2'>{remote_or_onsite}</button>
                <button className='btn'>{fulltime_or_parttime}</button>
            </div>
            <div className="flex">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <div className="">
                {/* <button onClick={()=>navigator('/job/${id}')}>View Details</button> */}
            <Link to={`/job/${id}`}><button className='btn bg-primary'>View Details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Job;