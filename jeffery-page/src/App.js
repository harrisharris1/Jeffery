import React from 'react';
import Nav from "./components/nav";
import Partner from "./components/partner";
import Home from "./components/home";
import {Route} from "react-router-dom";
import "./styles/navigation.scss";
import "./styles/body.scss";
import "./styles/split-screen.scss"
import "./styles/footter.scss";
import './App.css';

const App =()=> (

    <div className="App">
      <div>
         <Nav/>
         
         <Route exact path="/">
           <Home/>
        </Route>

         <Route exact path ="/partner">
          <Partner/> 
          </Route>
      
         </div>
    </div>
)

export default App;


