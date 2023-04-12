import { getStoredJobs } from "../Utils/fakeDB";

export const localStorage = async () => {
  const applyData = await fetch("/FeaturedJobs.json");
  const jobs = await applyData.json();
  const savedApplyJobs = getStoredJobs();
  let JobsArray = [];

  for (const id in savedApplyJobs) {
    const foundApplyJobs = jobs.find((job) => job.id === id);
    if (foundApplyJobs) {
      foundApplyJobs.quantity = savedApplyJobs[id];
      JobsArray.push(foundApplyJobs);
    }
  }
  return {JobsArray, jobs}
};