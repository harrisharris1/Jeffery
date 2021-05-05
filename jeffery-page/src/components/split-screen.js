import React from "react";
import GirlinRed from "../images/red-girl.jpg";


const SplitScreen =()=>(
    <div className="SplitScreenContainer">
            <div className="textSection">
                <div className="flex-text">
                <h3>Affordable Luxury</h3>
                <p>Having a little extra help in your life should be an affordable luxury for everyone.
                    Extra help equals extra time, and extra time means the freedom to live your life doing
                    exactly what you want to do.
                </p>
                </div>
            </div>

            <div className="split-picture">
            <img src={GirlinRed}></img>
            </div>
       


        
    </div>
);

export default SplitScreen