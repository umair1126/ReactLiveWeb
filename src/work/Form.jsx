import React, { useState } from "react";


const Form = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [fullName, setfullName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const [email, setEmail] = useState("");

    const updateFname = (e)=>{
        console.log(e.target.value);
        setfirstName(e.target.value);
    }

    const updateLname = (e)=>{
        console.log(e.target.value);
        setlastName(e.target.value);
    }

    const updateEmail = (e)=>{
        console.log(e.target.value);
        setinputEmail(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setfullName(firstName + " " + lastName);
        setEmail(inputEmail);
    }

    return (
        <>
            <div>
                <div id="container">
                    <form onSubmit= {submit}>
                        <h3> {fullName} </h3>
                        <p> {email} </p>

                        <input type="text" placeholder="Enter Your Fisrt Name" onChange={updateFname} required/>
                        <input type="text" placeholder="Enter Your Last Name" onChange={updateLname} required/>
                        <input type="email" placeholder="Enter Your Email" onChange={updateEmail} required/>

                        <button id="demo" type= "submit"> Submit </button>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Form;