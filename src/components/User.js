import { useEffect } from "react";

const User=({name})=>{

    //very interesting concept of useEffect
    useEffect(()=>{
        const timer=setInterval(() => {
            console.log("Inside use effect of About us");
        }, 1000);

        console.log("Use effect");

        //we have to do this return because it will unmount the useEffect. if not done the timer will continue running.
        return()=>{
            clearInterval(timer);
            console.log("useEffect returned");
        };
    },[]);

    return(
        <div className="user-card">
            <h1>Functional component</h1>
            <h1>Name: {name}</h1>
            <h2>Contact: 9373820373</h2>
        </div>
    )
}

export default User;