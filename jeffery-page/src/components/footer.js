import React from "react";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg";
import Insta from "../images/insta.svg";
import Jeffery from "../images/jeffery-logo.png"


const Footer = ()=>(
    <section className="footerContainer">
        <div className="columnsContainer">
           <div className="column1">
                <img src={Jeffery} width="120px" alt="Jeffery white logo"></img>
                <h5>We are on a mission to build intuitive professional services
                    into the places we live.
                </h5>
                    <div className="social-icons">
                        <img src={Twitter} ></img>
                        <img src={Facebook}></img>
                        <img src={Insta}></img>
                      

                    </div>
            </div>

            <div className="column2">
                <a>Our Story</a>
                <a>FAQ</a>
                <a>Blog</a>
                
            </div>

            <div className="column3">
                <a>Partner With Us</a>
                <a>Contact Us</a>
                <a>Terms of Service</a>
            </div>

            <div className="column4">
                <a>We're Hiring!</a>
                <a>Press</a>
                <a>Privacy Policy</a>
            </div>
            
           
        </div>

       

        
    </section>
)

export default Footer