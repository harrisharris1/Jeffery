import React from 'react';
import Nav from "./nav";
import HomeBody from "./body";
import SplitScreen from "./split-screen";
import BottomCTA from "./bottom-cta";
import Footer from "./footer";

import "../styles/navigation.scss";
import "../styles/body.scss";
import "../styles/split-screen.scss"
import "../styles/footter.scss";
import "../App.css";



const Home =()=> (

    <div className="Homepage">
      <div>
         <HomeBody/>
         <SplitScreen/>
         <BottomCTA/>
         <Footer/>
      
         </div>
    </div>
)

export default Home;