import React from 'react';
import Landing from './components/Landing.js'
import Profile from './components/Profile.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'

import "./scss/Index.scss";

function App() {
  return (
    <div id="App">
      <canvas id="canvas"></canvas>
      <div id="AppContent">
        <div className="page LandingPage">
          <Landing />
        </div>
        <div className="page ProfilePage">
          <Profile />
        </div>
        <div className="page PortfolioPage">
          <Portfolio />
        </div>
        <div className="page ContactPage">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
