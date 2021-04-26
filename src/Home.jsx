import React from "react";
import theKey from "./images/theKey.svg";

import Button from '@material-ui/core/Button';


const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid" id="top2">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <h1> Start Growing Bussiness With <strong id="demo01"> LockSmith </strong> </h1>
                                    <h4> The LockSmith service Lahore Has To Offer! 24 Hours Availabe</h4>
                                    <Button className="mt-2" id="get-start" variant="contained" color="primary"> Get Started </Button>
                                </div>

                                <div className="col-md-4 ml-auto mt-5 d-flex justify-content-center img_animated" >
                                    <img src={theKey} height="200" width="200"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;