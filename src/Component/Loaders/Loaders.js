

import { getStoredJobs } from "../../Utilis/fackDb";

export const localStorage = async () => {
  const applyData = await fetch("/jobs.json");
  const jobs = await applyData.json();
  console.log(jobs);
  const savedApplyJobs = getStoredJobs();
  let JobsArray = [];

  for (const id in savedApplyJobs) {
    const foundApplyJobs = jobs.find((job) => job.id == id);
    if (foundApplyJobs) {
      foundApplyJobs.quantity = savedApplyJobs[id];
      JobsArray.push(foundApplyJobs);
    }
  }
  console.log(JobsArray);
  return JobsArray;
};