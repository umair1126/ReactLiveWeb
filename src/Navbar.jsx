import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid" id="top">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
                            <NavLink className="navbar-brand" to="/"><strong> LockSmith </strong></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink exact activeClassName="active_class" className="nav-link" to="/"> Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active_class" className="nav-link" to="/service"> Service </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active_class" className="nav-link" to="/about"> About </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active_class" className="nav-link" to="/contact"> Contact </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Navbar;