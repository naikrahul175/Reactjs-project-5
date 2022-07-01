import React,{useEffect} from 'react'

export const Details = () => {
  useEffect(()=>{
    getJobOpeningsDeatails()
  },[])

  const  getJobOpeningsDeatails = () => {
    fetch(`https://teknorix.jobsoid.com/api/v1/locations`)
    .then((res) => {
        if(!res.ok) {
            console.log("Error in the network");
        }
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error("There has been a error in your feth operation",err);
    });
  }
  return (
    <div>Details page</div>
  )
}
