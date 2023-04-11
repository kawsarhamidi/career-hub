const addToDb = id => {
    let appliedJobs = {}
    const storedCart = localStorage.getItem('applied-jobs')
    if(storedCart){
        appliedJobs = JSON.parse(storedCart)
    }
    const quantity = appliedJobs[id]
    if(quantity){
        const newQuantity = quantity + 1
        appliedJobs[id] = newQuantity
    }
    else{
        appliedJobs[id] = 1
    }

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
}