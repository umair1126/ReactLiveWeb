import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = ()=>{

    const [num, setNum] = useState();
    const [theName, setName] = useState();
    const [move, setMove] = useState();

    useEffect((Event)=>{
        // console.log("something happening");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);
            console.log(res);
            console.log(res.data.moves[3].move.name);

        }

        getData();
    })

    return(
        <>
            <div className="m-3">
                <h2> You Choose Number : {num} </h2>
                <h1> I AM {theName} </h1>
                <h2> I have {move} moves </h2>
                <select className="myoption" onChange={(event)=>{
                    setNum(event.target.value);
                }}>
                    <option value="1"> 1 </option>
                    <option value="25"> 25 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
            </div>
        </>
    );
}

export default Pokemon;