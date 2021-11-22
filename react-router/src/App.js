import React from 'react';
import './App.css';
import Header from './header';
import Home from './home';
import Links from './links';
import About from './about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="links" element={<Links />} /> 
          <Route path="about" element={<About />} />  
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
