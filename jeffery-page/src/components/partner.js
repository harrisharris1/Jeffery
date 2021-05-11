
import React from 'react';
import Footer from "./footer";
import Scale from "../images/scale.svg"
import Camden from "../images/camden.jpg";
import Green from "../images/greenstreetlogo.jpeg";
import Prello from "../images/prello.png";




const Partner =()=>(
    <div className="partnerContainer">
        <h1>Why Partner with <strong>Jeffery</strong>?</h1>
        <div className="textContainer">
        <img src={Scale} alt="person walking up"></img>
            <div className="text">
            <h2>Reach hundreds of costumers</h2>
            <p>We bring the passionate, motivated, skilled and talented individuals, to your building creating a benefit for your residents.</p>
            </div>
        </div>


        <div className="partners-logos">
            <h3>Our Partners</h3>
            <div className="logos">
            <img src={Camden} alt="camden logo" className="camden"></img>
            <img src={Green} alt="green street logo" className="green"></img>
            <img src={Prello} alt="prello logo" className="prello"></img>

            </div>

        </div>
        <Footer/>
    </div>
); 
export default Partner

