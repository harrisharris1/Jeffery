import React from "react";
import {NavLink} from "react-router-dom";





const Navigation =()=>(
        <div className="nav">
            <div className="nav-background">
                <div className="nav-links">
                    <img src="" width="80px" alt="logo"></img>
                    <NavLink className="partner" to="/partner">Partner With Us</NavLink>
                </div>
                <div className="Intro">
                    <h1>All inclusive living is living made better.</h1>
                    <p>All-inclusive, automated amenities to power temporary living.</p>
                </div>

            </div>
            
            
        </div>
);

export default Navigation