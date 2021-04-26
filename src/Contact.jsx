import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Contact = () => {
    return (
        <>
            <section id="contact-sec" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="row d-flex justify-content-around">
                                <div className="col-lg-4 mb-4">
                                    <TextField className="full-name" id="standard-basic" type="text" label="FullName" />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <TextField className="email" id="standard-basic" label="Email" type="email" />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-around">
                                <div className="col-lg-4 mb-4">
                                    <TextField className="address" id="standard-basic" type="text" label="Address" />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <TextField className="contact" id="standard-basic" label="Contact" type="contact" />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-around mt-5 mr-5">
                                <div className="col-lg-10 mb-4">
                                    <TextField
                                        className="description"
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={6}
                                        variant="outlined"
                                    />
                                </div>
                            </div>

                            <div className="row ml-sm-5">
                                <div className="col-md-6 mt-2">
                                    <Button variant="contained" color="primary" style={{outline: "none"}}> Contact Now </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;