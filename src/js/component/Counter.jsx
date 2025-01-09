import React, { useEffect, useState } from "react";


const Counter = () => {
	const [Count, setCount] = useState(0)
    const[isCounting, setisCounting] = useState(true)
    
    useEffect(() => {
        let interval;
    
        if (isCounting) {
          interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);  
          }, 1000); 
        } else {
          clearInterval(interval);
        }
    
        
        return () => clearInterval(interval);
    
      }, [isCounting]); 
    
      const start = () => setisCounting(true);   
      const pause = () => setisCounting(false);  
      const reset = () => setCount(0);          
    
        const counter6 = Math.floor((Count % 1000000/100000))
        const counter5 = Math.floor((Count % 100000/10000))
        const counter4 = Math.floor((Count % 10000/1000))
        const counter3 = Math.floor((Count % 1000/100))
        const counter2 = Math.floor((Count % 100/10))
        const counter1 = Math.floor((Count % 10))
   
    return (
        <div className="container mt-5">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="card-title">Contador de Segundos</h1>
        <div className="row justify-content-center p-4">
            <div className="border w-auto">{counter6}</div>
            <div className="border w-auto">{counter5}</div>
            <div className="border w-auto">{counter4}</div>
            <div className="border w-auto">{counter3}</div>
            <div className="border w-auto">{counter2}</div>
            <div className="border w-auto">{counter1}</div>
        </div>
        <button className="btn btn-primary m-3" onClick={start}>Start</button>
        <button className="btn btn-secondary " onClick={pause}>Pause</button>
            <button className="btn btn-danger m-3" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
};

export default Counter;
