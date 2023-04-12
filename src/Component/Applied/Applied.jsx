import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const Applied = ({job}) => {
  console.log(job);
    const {id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = job;
    return (
        <div>
            
      <div>
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
              src={company_logo}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {job_title}
                  </h3>
                  <p className="text-sm text-black"> {company_name}</p>

                  <div className="flex mt-1 gap-6 justify-start ">
                    <div className="border-2 border-indigo-600 bg-gray-300 rounded-lg p-1">
                      <h1>{remote_or_onsite}</h1>
                    </div>
                    <div className="border-2 border-indigo-600 bg-gray-300 rounded-lg p-1">
                      <h1>{fulltime_or_parttime}</h1>
                    </div>
                  </div>

                  <div className="flex gap-20 justify-between">
                    <div className="flex mt-4">

                    </div>
                  </div>
                </div>
                <Link to={`/jobDetails/${id}`} className="text-right">
                  <button className="btn bg-purple-800">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </div>
        </div>
    );
};

export default Applied;