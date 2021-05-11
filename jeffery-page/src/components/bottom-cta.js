import React from "react";
import{Link} from "react-router-dom";

const BottomCTA =()=>(
    <div className="BottomCTAContainer">
        <div className="cta-text">
            <h4>Ready to join us?</h4>
            <p>Tell us a bit about yourself to learn more.</p>
            {/* <Button className="cta-btnbottom">Contact Jeffery</Button> */}
            <Link to="/contact" className="cta-btnbottom">Contact Jeffery</Link>
        </div>
           


        
    </div>
);

export default BottomCTA