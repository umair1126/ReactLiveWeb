import React, { useState } from "react";

import Getval from "./Getval";

const ToDolist = ()=>{

    const [inputVal, setinputVal] = useState("");

    const [list, setList] = useState([]);

    const updateInput = (e)=>{
        // console.log(e.target.value);
        setinputVal(e.target.value);
    }

    const submit = ()=>{
        setList((oldItems)=>{
            return [...oldItems, inputVal];
        })
        setinputVal("");
    }

    // const deleteItem = (id)=>{
    //     console.log("delete");
    //     setList((oldItems)=>{
    //         return oldItems.filter((arr, index)=>{
    //             return index != id;
    //         });
    //     });
    // }

    return(
        <>
            <div className="container">
                <div className="main-container">
                    <h1> ToDolist </h1>
                    <input type="text" placeholder="enter an item" onChange={updateInput} value= {inputVal}/>
                    <button id="addbtn" onClick= {submit}> + </button>
                    <ul>
                        {list.map((value, index, array)=>{
                            return (
                                <Getval 
                                   text = {value}
                                   position = {index}
                                //    list = {array}
                                //    onselect = {deleteItem} 
                                />
                            );
                        })} 
                    </ul>
                </div>
            </div>
        </>
    )

}


export default ToDolist;