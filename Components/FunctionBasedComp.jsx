import { useState } from "react";

 
 function FunctionBasedComp(){

    const[count, setCount]=useState (0);

    const handleDecrment = ()=>{
            setCount((prevCount) => prevCount -1);
    }

    const handleIncrement = ()=>{
            setCount((prevCount) =>(prevCount + 1 ));
    }

    return(
        <div>
             <p className="text-center mb-5 font-bold">
                {count}</p>
             <div className="flex gap=4">
             <button 
                onclick={handleDecrment} 
             className="px-4 py=1.5rounded bg-blue-200">
             Decrement
             </button>
             <button 
             onclick={handleIncrement} 
             className="px-4 py=1.5rounded bg-green-200">
             Increment
             </button>  
             </div>
        </div>
    );
 }

 export default FunctionBasedComp;