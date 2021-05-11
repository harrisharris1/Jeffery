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
                        <img src={Twitter} alt="twitter icon"></img>
                        <img src={Facebook} alt="facebook icon"></img>
                        <img src={Insta} alt="insta icon"></img>
                      

                    </div>
            </div>

            <div className="column2">
                <p>Our Story</p>
                <p>FAQ</p>
                <p>Blog</p>
                
            </div>

            <div className="column3">
                <p>Partner With Us</p>
                <p>Contact Us</p>
                <p>Terms of Service</p>
            </div>

            <div className="column4">
                <p>We're Hiring!</p>
                <p>Press</p>
                <p>Privacy Policy</p>
            </div>
            
           
        </div>

       

        
    </section>
)

export default Footer