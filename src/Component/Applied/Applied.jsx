import React, { useState } from 'react';

import { Link, useLoaderData } from "react-router-dom";
import AppliedJob from './AppliedJob';

const Applied = () => {
  const { JobsArray } = useLoaderData(); 

 
  const [selectItem, setSelectItem] = useState("");

  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  const filterAppliedItem = JobsArray.filter(
    (jobItem) => jobItem.jobType === selectItem || selectItem === ""
  );
  console.log(filterAppliedItem);
    return (
        <div>
            {/* <div className="text-end mb-4 max-w-6xl mx-auto mt-5">
        <select
          value={selectItem}
          onChange={handleChange}
          className="bg-slate-50 px-8 py-2"
        >
          <option value="">Filter By</option>
          <option value="remote_or_onsite">Remote</option>
          <option value="fulltime_or_parttime">Onsite</option>
        </select>
      </div> */}
      
      
      <div>
        <div
          className="flex min-h-screen items-center justify-center
     bg-gray-100 text-gray-900"
        >
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
            <ul className="flex flex-col divide-y divide-gray-700 ">
              {filterAppliedItem.map((job) => (
                <AppliedJob key={job.id} job={job}></AppliedJob>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
        </div>
    );
};

export default Applied;

// <Link to={`/jobDetails/${id}`} className="text-right">
//                   <button className="btn bg-purple-800">View Details</button>
//                 </Link>