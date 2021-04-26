import React from "react";


const Sourceimg = (props)=>{

    const sourceImg = `https://source.unsplash.com/300x300/?${props.name}`;

    return(
        <>
            <img src= {sourceImg} alt="myimage"/>
        </>
    );
}


export default Sourceimg;