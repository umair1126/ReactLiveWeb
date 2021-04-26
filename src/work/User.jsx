import React from "react";
import { useHistory, useLocation, useParams } from "react-router";

// const User = ({match})=>{
//     return <h2> Welcome The Man {match.params.fname} and {match.params.lname}</h2>
// }


const User = ()=>{

    const { fname, lname } = useParams();
    const currentLocation = useLocation();
    const currentHistory = useHistory();

    console.log(currentLocation);
    console.log(currentHistory);

    return (
        <>
            <h2> hey Whatsapp guys {fname} & {lname} is here </h2>
            <p> The CurrentLocation is {currentLocation.pathname} </p>
            {currentLocation.pathname === `/user/haider/${lname}` ? 
                <button onClick={()=>{
                    alert("WELLDONE!");
                }}> OK! </button>
             : null}

            <br/>

            {currentLocation.pathname === `/user/haider/${lname}` ?
                <button onClick={()=>{
                    currentHistory.goBack();
                }}>
                    Go Back
                </button> : null}

            <br/>

            {currentLocation.pathname === `/user/haider/${lname}` ?
                <button onClick={()=>{
                    currentHistory.push('/');
                }}>
                    Home
                </button> : null}     
        </>
    );
}

export default User;