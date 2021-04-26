import React, { useState } from "react";





let Digital = ()=> {

    let time = new Date().toLocaleTimeString();

    let state = useState();

    let [ctime, setState] = useState(time);

    let update = ()=>{
        let updateTime = new Date().toLocaleTimeString();
        setState(updateTime);
    }

    setInterval(() => {
        update();
    }, 1000);

    return(
        <>
          <h2> The Current time is : {ctime} </h2> 
        </>
    );
}


export default Digital; 