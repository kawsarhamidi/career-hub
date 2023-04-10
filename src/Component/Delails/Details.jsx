import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = ({params}) => {
    const jobDetails = useLoaderData();
    const [jobData, setJobData] = useState([]);
    let {detailId} = useParams();
    console.log(detailId);
    useEffect(()=>{
        fetch("../jobs.json")
        .then(res=>res.json())
        .then(data => setJobData(data))
        
    },[])

    return (
        <div>
            <div className="">
                hi
            </div>
        </div>
    );
};

export default Details;