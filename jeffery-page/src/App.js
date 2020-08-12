import React from 'react';
import Nav from "./components/nav";
import HomeBody from "./components/body";
import SplitScreen from "./components/split-screen";
import "./styles/navigation.scss";
import "./styles/body.scss";
import "./styles/split-screen.scss"
// import "./styles/split-screen.scss"
import './App.css';

function App() {
  return (
    <div className="App">
      
         <Nav/>
         <HomeBody/>
         <SplitScreen/>
      
      
    </div>
  );
}

export default App;


