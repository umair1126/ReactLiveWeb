import React from "react";

let Game = () => {
    let x = "😃";
    let y = "😃";
    let z = "😃";

    if (x == y && y == z) {
        return (
            <>
                <div style={{ fontSize: "30px" }}> {x} {y} {z} </div>
                <h4> These are Matching </h4>
            </>
        )
    }
}


const Slot = () => {
    return (
        <>
            <div>
                <h1> 🎰 WELCOME TO SLOT MACHINE 🎰 </h1>
                <Game />
            </div>
        </>
    )
}


export default Slot;