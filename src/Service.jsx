import React from "react";
import Cards from "./Cards";

import cover from "./images/cover.jpg";
import cover2 from "./images/cover2.jpg";
import cover3 from "./images/cover3.jpg";
import cover4 from "./images/cover4.jpg";

const Service = () => {
    return (
        <>
            <section id="service" className="align-items-center">
               <div className="service-heading">
                   <h2> Services We Offfers </h2>
               </div>
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <div className="row d-flex justify-content-around">
                                <div className="col-md-4 mb-5">
                                    <Cards 
                                        the_image={cover}
                                        the_title="Commercial"
                                        the_parahgraph="We offer commercial locksmith Lahore 
                                        services for organization and businesses of all sizes"
                                    />
                                </div>
                                <div className="col-md-4 mb-5">
                                    <Cards 
                                        the_image={cover2}
                                        the_title="Automotive"
                                        the_parahgraph="We offer commercial locksmith Lahore 
                                        services for organization and businesses of all sizes"    
                                    />
                                </div>
                            </div>

                            <div className="row mt-5 d-flex justify-content-around">
                                <div className="col-md-4 mb-5">
                                    <Cards 
                                        the_image={cover3}
                                        the_title="Residential"
                                        the_parahgraph="We offer commercial locksmith Lahore 
                                        services for organization and businesses of all sizes"
                                    />
                                </div>
                                <div className="col-md-4 mb-5">
                                    <Cards 
                                        the_image={cover4}
                                        the_title="Emergency"
                                        the_parahgraph="We offer commercial locksmith Lahore 
                                        services for organization and businesses of all sizes"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;