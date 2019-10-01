import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Switch,Route } from "react-router-dom";

function App() {
  return <div className="">
    <Switch> //hepls render specific routes
      <Route exact path='/' component={HomePage}/>
    </Switch>
  </div>
}

export default App;
