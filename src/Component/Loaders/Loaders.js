import { getStoredJobs } from "../Utils/fakeDB";

export const localStorage = async () => {
  const applyData = await fetch("/FeaturedJobs.json");
  const jobs = await applyData.json();
  const savedApplayJobs = getStoredJobs();
  let JobsArray = [];

  for (const id in savedApplayJobs) {
    const foundApplyJobs = jobs.find((job) => job.id === id);
    if (foundApplyJobs) {
      foundApplyJobs.quantity = savedApplayJobs[id];
      JobsArray.push(foundApplyJobs);
    }
  }
  return {JobsArray, jobs}
};