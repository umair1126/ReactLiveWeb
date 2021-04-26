import React from "react";


let Info = (params)=>{
    return(
        <>
           <h2> My name is {params.yourName} </h2>
           <h3> My profession is {params.profession} </h3>
        </>
    );
}


export default Info;