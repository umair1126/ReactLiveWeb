import React, { useState } from "react";




let Clock = ()=>{

   let state = useState();

   var time = new Date();
   time = time.toLocaleTimeString();

   let [thetime, setState] = useState(time);

   let getTime = ()=> {
       let newTime = new Date().toLocaleTimeString();
       setState(newTime);
   }

   return(
       <>
         <h2> {thetime} </h2>
         <button onClick= {getTime}> Click me</button>
       </>
   );
}


export default Clock;