// OLD METHODS
// var React = require("react");
// var ReactDOM = require("react-dom");

// NEW METHODS



// ReactDOM.render(<h1> HELLO REACT! Good Luck</h1>, 
//   document.getElementById("root"));


// ReactDOM.render(
//   <>
//     <h1> HELLO REACT!</h1>
//     <h3> REACT is going WELL </h3>
//     <p> React is created by facebook and their Engineers to</p>
//   </>  
//   , document.getElementById("root")
// );

// ReactDOM.render(
//   <React.Fragment>
//     <h2> THAAPA Technical Netflix Picks</h2>
//     <p> List of 5 best serires : </p>
//     <ol>
//       <li>Dark</li>
//       <li>Extra curricular</li>
//       <li>My Holo Love</li>
//       <li>My First-2 Love</li>
//       <li>My Robot</li>
//     </ol>
//   </React.Fragment>, 
//   document.getElementById("root")
// );


// var myname = "umair ali";

// ReactDOM.render(
//   <>
//   <h2> my name is {myname}</h2>
//   <p> your lucky number is {Math.random() * 9}</p>
//   <p> your lucky number is {(4 < 8 ? "no done" : "done")}</p>

//   </>,
//   document.getElementById("root")
// );

// let first_name = "Umair";
// let last_name = "Ali";

// ReactDOM.render(
//   <>
//     <h4> my name is {`${first_name} ${last_name}`} </h4>
//     <p> thanks for watching !</p>
//   </>,
//   document.getElementById("root")
// );




// var myname = "umair ali";
// let d = new Date();


// ReactDOM.render(
//   <>
//     <h1> YOUR FULL NAME IS : {myname}</h1>
//     <h2 className="country"> I LIVE IN PAKISTAN </h2>
//     <p> CURRENT DATE IS : {d.toLocaleDateString()}</p>
//     <p> Current time is now : {d.toLocaleTimeString()}</p> 
//   </>,
//   document.getElementById("root")
// );


// let mystyle = {
//   color: "gray",
//   textAlign: "center", 
//   margin: "30px 0px",
//   textTransform: "capitalize"
// }

// ReactDOM.render(
//   <>
//     <h2 style = {mystyle}>
//      these are some random pictures </h2>
//     <img src="https://source.unsplash.com/user/erondu/200x200" alt="randomImage" />   
//     <img src="https://picsum.photos/200/200" alt="randomImage"/>  
//     <img src="https://random.imagecdn.app/200/200" alt="randomImage"/>  
//   </>,
//   document.getElementById("root")
// );


// if (hour <= 11) {
//   console.log("Morning is on way");
// }
// else if (hour <= 19) {
//   console.log("Afternoon is on way");
// }
// else{
//   console.log("Night is on way");
// }


// const cssStyle = {};

// function getHour() {
//   let time = new Date();
//   let hour = time.getHours();

//   if (hour <= 11) {
//     // text = "Good Morning";
//     // cssStyle.color = "red";
//     return cssStyle.color = "red", "Good Morning";
//   }
//   else if (hour <= 19) {
//     // text = "Good Afternoon";
//     // cssStyle.color = "yellow";
//     return cssStyle.color = "yellow", "Good Afternoon";
//   }
//   else {
//     // text = "Good Night";
//     // cssStyle.color = "blue";
//     return cssStyle.color = "blue", "Good Night";

//   }
// } 

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


// import Timer from "./DigitalClocknpm";


ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);


