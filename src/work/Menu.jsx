import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = ()=>{
    return(
        <>
           <NavLink exact activeClassName="active_class" to="/" style={{textDecoration: "none"}}> Home </NavLink>
           <NavLink exact activeClassName="active_class" to="/contact" 
           style={{textDecoration: "none"}}> Contact </NavLink>
           <NavLink exact activeClassName="active_class" to="/user/umair/ali" style={{textDecoration: "none"}}>
               User
           </NavLink>
           <NavLink exact activeClassName="active_class" to="/search" style={{textDecoration: "none"}}>
               Search
           </NavLink>
           <br />
           <a href="/"> Home </a>
           <a href="/contact"> Contact </a>
        </>
    );
}

export default Menu;