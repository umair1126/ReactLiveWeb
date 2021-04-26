import React, { useState } from "react";

let count = 0;

let incNum = ()=>{
    count++;
    console.log("clicking" + count);
}


const Hook = ()=>{

    let state = useState();

    let [count, setCount] = useState(0);

    let incNum = ()=>{
        setCount(count + 1);
        console.log(count);
    }

    return(
        <>
          <h3> {count} </h3>
          <button onClick= {incNum}> ADD ME </button>
        </>
    );
}


export default Hook;