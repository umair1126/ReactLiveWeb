import React, { useContext } from "react";
import { theName,Comment } from "./App";

const CompB = () => {

    const myname = useContext(theName);
    const mycomment = useContext(Comment);

    return (
        <>
            {/* <theName.Consumer>
                {(fname, comment) => {
                   return (
                       <>
                           <Comment.Consumer>
                               {(comment)=>{
                                   return(
                                       <>
                                           <h1> my name is {fname} and something is going {comment} </h1>
                                       </>
                                   )
                               }}
                           </Comment.Consumer>
                       </>
                   )
                }}
            </theName.Consumer> */}

            <h1> my name is {myname} and you are {mycomment} </h1>

        </>
    );
}

export default CompB;