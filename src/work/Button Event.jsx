import React, { useState } from "react";



let Button = ()=>{
    
    const bgColor = '#43BFC7';
    const btnName = "Click Me";
    const btnColor = "#737CA1";

    const [curbgColor, setbgColor] = useState(bgColor);
    const [curbtnName, setbtnName] = useState(btnName);
    const [curbtnColor, setbtnColor] = useState(btnColor);

    const updateSingle = ()=>{
        setbgColor("#6CBB3C");
        setbtnName("Cool 😏");
        setbtnColor("#8E35EF");
    }

    const updateDouble = ()=>{
        setbgColor("#C24641");
        setbtnName("Nice 😇");
        setbtnColor("#E4287C");
    }

    return(
        <>
          <div style= {{backgroundColor: curbgColor}}>
              <button style= {{backgroundColor: curbtnColor}} onClick= {updateSingle}
              onDoubleClick= {updateDouble} > {curbtnName} </button>
          </div>
        </>
    )
}



export default Button;