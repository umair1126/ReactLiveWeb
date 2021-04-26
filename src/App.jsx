
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = ()=>{
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/service"  component={Service} />
        <Route exact path="/contact"  component={Contact} />
        <Redirect to="/"/>
      </Switch>
    </>
  )
}



export default App;









// import React from "react";
// import Card from "./card";
// import Slot from "./Slot";
// import Info from "./Info";
// import Hook from "./Hook";
// import Clock from "./Clock";
// import Digital from './Digital';
// import Button from "./Button Event";
// import Form from "./Form";
// import ToDolist from "./ToDolist";
// import IncDec from "./IncDec";
// import DigitalClocknpm from "./DigitalClocknpm";
// import Timer from "./DigitalClocknpm";

// import CompA from "./CompA";

// import { createContext } from "react";

// import Effect from "./Effect";
// import Pokemon from "./Pokemon";

// const theName = createContext();
// const Comment = createContext();

// import Home from "./Home";
// import Contact from "./Contact";
// import Menu from "./Menu";
// import User from "./User";
// import Searchimg from "./Searchimg";
// import Error from "./Error";





// const App = ()=>{

//   return(
//     <>
//       {/* <theName.Provider value= {"umair ali arshad"}>
//         <Comment.Provider value={"Awesome"}>
//            <CompA />
//         </Comment.Provider>
//       </theName.Provider> */}
      
//     </>
//   );
// }


// export { theName, Comment };



// let arr1 = ["umair ali", "fahad", "shamonn"];
// let [first, ...remain] = arr1;
// console.log(arr1);
// console.log(first);
// console.log(remain);



// const App = ()=>{
//   return(
//     <>
//       <Button />
//     </>
//   )
// }
 

// function App() {
//     return(
//         <>
//           <Card />
//           <br />
//           <br />
//           <br />
//           <br />
//           <h2>Every thing is going well</h2>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <Card message="these are all guys going well"/>

//         </>
//     );
// }

// const App = ()=> {
//     return(
//         <>
//           <div>
//             <Slot />
//             <h2> hey guys whats going on! </h2>
//             <Info yourName= "Umair ali" profession= "developer" />
//             <h2> Another Adventure</h2>
//             <Hook />
//             <h1> Clock Challange </h1>
//             <Clock />
//             <h1> Digital Clock </h1>
//             <Digital />
//           </div>
//         </>
//     );
// }

