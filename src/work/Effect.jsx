import React, { useEffect, useState } from "react";

const Effect = ()=>{

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(()=>{
        document.title = "click time " + num2;
    }, [num2]);

    return(
        <>
            <div className="m-3">
                <button className="btn btn-primary" onClick={()=>{
                    setNum1(num1 + 1);
                }}> click {num1} </button>
                <br/>
                <br/>
                <button className="btn btn-success" onClick={()=>{
                    setNum2(num2 + 1);
                }}> click {num2} </button>
            </div>
        </>
    );
}

export default Effect;