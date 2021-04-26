import React, { useState } from "react";

import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const Getval = (props) => {

    const [line, setLine] = useState(false);

    const doAction = ()=>{
        setLine(true);
    }

    return (
        <>
            <div className="theitem">
                <span onClick={doAction} id="myIcon"> <DeleteSweepIcon /> </span>
                <li style={{textDecoration : line ? "line-through" : "none", color : line ? "#98AFC7" : "none"}}>
                    {props.text}
                </li>
            </div>
        </>
    );
}

export default Getval;