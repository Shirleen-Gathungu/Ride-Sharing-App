import React from 'react';
import './App.css';
import Home from './components/Home';
import Ride from './components/Ride';
import How from './components/How';

import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route exact path ='*/' element={<Home/>} />
      <Route exact path ='/ride' element={<Ride/>} />
      <Route exact path ='/works' element={<How/>} />
     
      {/* <Route exact path ='#' element={<Ride/>} /> */}
      </Routes>
    </Router> 

    </div>
  );
}

export default App;
