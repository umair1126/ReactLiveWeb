import React from "react";
import data from "./data";

function Card(params) {
    return(
        <>
          <h3> welcome to cards </h3>
          <p> {data.map((value, inedx)=>{
              return(
                  <>
                     <div>
                         <h2> {inedx + 1} </h2>
                         <h3> {value.student_name} </h3>
                         <h4> {value.college} </h4>
                         <h5> {value.class} </h5>
                         <p> {value.marks} </p>
                         <img src= {value.Image} />
                         <br />
                         <strong> {params.message} </strong>
                     </div>
                  </>
              );
          })} </p>
        </>
    );
}

export default Card;