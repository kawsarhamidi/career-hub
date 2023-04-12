// const addToDb = id => {
//     let appliedJobs = {}
//     const storedCart = localStorage.getItem('applied-jobs')
//     if(storedCart){
//         appliedJobs = JSON.parse(storedCart)
//     }
//     const quantity = appliedJobs[id]
//     if(quantity){
//         const newQuantity = quantity + 1
//         appliedJobs[id] = newQuantity
//     }
//     else{
//         appliedJobs[id] = 1
//     }



//     localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
// }

  // ======

  const addToDb = (id) => {
    let applyJobs = {};
  
    const storedJobs = localStorage.getItem("applyJobs");
    if (storedJobs) {
      applyJobs = JSON.parse(storedJobs);
    }
  
    const applyQuantityJobs = applyJobs[id];
    if (applyQuantityJobs) {
      applyJobs[id] = applyQuantityJobs + 1;
    } else {
      applyJobs[id] = 1;
    }
  
    localStorage.setItem("applyJobs", JSON.stringify(applyJobs));
  };
  
  // ======

  const getStoredJobs = () => {
    let applyJobs = {};
  
    const storedJobs = localStorage.getItem("applyJobs");
    if (storedJobs) {
      applyJobs = JSON.parse(storedJobs);
    }
    return applyJobs;
  };
  
  export { addToDb, getStoredJobs };