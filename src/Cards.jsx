import React from "react";
import { NavLink } from "react-router-dom";

import Button from '@material-ui/core/Button';

const Cards = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.the_image} className="card-img-top" alt="cover_Image" />
                <div className="card-body">
                    <h5 className="card-title"> {props.the_title} </h5>
                    <p className="card-text"> {props.the_parahgraph} </p>
                    <Button className="mt-2" id="get-start" variant="contained" color="primary"> Read more </Button>
                </div>
            </div>
        </>
    );
}


export default Cards;