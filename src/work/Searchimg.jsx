import React, { useState } from "react";
import Sourceimg from "./Sourceimg";

const Searchimg = () => {

    const [img, setImg] = useState();

    const inputEvent = (e) => {
        const data = e.target.value;
        setImg(data);
    }

    return (
        <>
            <div className="search_img">
                <input type="text" placeholder="search Image" onChange={inputEvent} value={img} />
                <br />
                <br />
                {img === "" ? null : <Sourceimg name={img}/>}
            </div>
        </>
    );
}


export default Searchimg;