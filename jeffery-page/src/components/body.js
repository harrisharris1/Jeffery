import React from "react";
import {Button} from "react-bootstrap";
import Couch from "../images/cozy-pug.jpg";
import Bath from "../images/bathroom.jpg"
import Girlfriends from "../images/happy-friends2.jpg";
import GirlJump from "../images/jumping-girl1.jpg";
import Fingerprint from "../images/print.png";
import Finger from "../images/finger-pointing.png";
import Employee from "../images/grad-hat.png";




const HomeBody =()=>(
        <div className="main-container">
            
            
            <div className="content-section-reverse">
                  <div className="img-content">
                        <img src={Couch} alt="comfy couch"></img>
                    </div>

                <div className="text-content-top">
                    <h2><strong>Let us</strong> take care of the details</h2>
                    <p>Weekly cleaning: Once a week, our professional team cleans
                        bedrooms, and shared spaces, including kitchens, living rooms, and shared bathrooms.
                    </p>
                    <Button className="cta-btn">Find out more</Button>

                  
                    
                </div> {/*text container*/}
            </div> {/*content section*/ }
      
               
    
                <div className="content-section">
                    <div className="img-content">
                        <img src={Bath} className="img-fluid rounded" alt="Bathroom picture"></img>
                    </div>
                
                
                    <div className="text-content">
                        <h2><strong>Stocked</strong> with care.</h2>
                        <p>We stock your bath staples like towels, shampoo, conditioner,
                            body wash and hand soap, so you don't have to run those pesky errands.
                        </p>
                        <Button className="cta-btn">Find out more</Button>
                        
                    </div>{/*text content */}
                </div> {/*content section*/}



                <div className="content-section-reverse">
                <div className="img-content">
                            <img src={Girlfriends} className="img-fluid rounded" alt="Happy girl"></img>
                        </div>

                    <div className="text-content">
                        <h2>Say <strong>goodbye</strong> to chores.</h2>
                        <p>Having a little extra help in your life should be an affordable 
                            luxury for everyone. Extra help equals extra time, and extra time
                            means the freedom to live your life doing exactly what
                            you want to do.
                        </p>
                        <ul className="checklist">
                            <li>Laundry washed and folded</li>
                            <li>Social events</li>
                            <li>Weekly towel and linen service</li>
                            <li>Free Uber rides</li>
                        </ul>
                        <Button className="cta-btn">Find out more</Button>
                   
                
                        
                    </div> {/*text contant */}
                </div> {/* contant section */}
      
               
    
                <div className="content-section">
                            <div className="img-content">
                                <img src={GirlJump} className="girl-jump" alt="Happy mother and daughter"></img>
                            </div>
                    
                    
                        <div className="text-content">
                            <h3> <strong>Jefferys</strong> Make Sure it Gets Done Right.</h3>
                            <p>Dedicated Jefferys with you 24/7 to get your home on auto-pilot.</p>
                       
                                <div className="listContainer">
                                                <div className="list">
                                                        <div className="fingerprint">
                                                        <img  src={Fingerprint} alt="fingerprint"></img>
                                                        </div>
                                                    <div className="paragraph">
                                                            <h4> Background Checked</h4>
                                                            <p>All Jefferys are background checked. Each Jeffery is carefully
                                                                hand-picked from thousands of applicants.
                                                            </p>
                                                    </div>
                                                </div>


                                        <div className="list">
                                            <div className="finger">
                                            <img src={Finger} alt="finger"></img>
                                            </div>
                                                <div className="paragraph">
                                                    <h4> Only The Best Quality</h4>
                                                    <p>Jefferys are full employees wuth competitive compensation and 
                                                        bonuses for each positive customer review incentivizing them to
                                                        go above and beyond.
                                                    </p>
                                                </div>
                                        </div>

                                        

                                        <div className="list">
                                                        <div className="employee">
                                                        <img  src={Employee} alt="employee"></img> 
                                                        </div>
                                                <div className="paragraph">
                                                        <h4>Trained and Trusted</h4>
                                                    
                                                        <p>Graduates of Jeffery Accelerate (program created by hospitality
                                                        experts). Jefferys only have access to your home on your service
                                                        date.</p>
                                                    </div>
                                        </div>
                            </div>
                        </div> {/*text content*/}
                    </div>
            </div>

        
);







export default HomeBody;