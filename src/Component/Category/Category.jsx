import React from 'react';

const Category = ({category}) => {
    const {name, jobsAvailable, company_logo} = category;
    return (
        <div className='card bg-red-300'>
            <div className="card-body">
                <img className='h-12 w-12' src={company_logo} alt="" />
                <p>{name}</p>
                <p>{jobsAvailable}</p>
            </div>
        </div>
    );
};

export default Category;