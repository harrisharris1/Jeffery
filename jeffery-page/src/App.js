import React from 'react';
import Nav from "./components/nav";
import HomeBody from "./components/body";
import SplitScreen from "./components/split-screen";
import BottomCTA from "./components/bottom-cta";
import Footer from "./components/footer";
import "./styles/navigation.scss";
import "./styles/body.scss";
import "./styles/split-screen.scss"
import "./styles/footter.scss";
import './App.css';

function App() {
  return (
    <div className="App">
      
         <Nav/>
         <HomeBody/>
         <SplitScreen/>
         <BottomCTA/>
         <Footer/>
      
      
    </div>
  );
}

export default App;


