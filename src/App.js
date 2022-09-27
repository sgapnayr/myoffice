import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Awards from './components/Awards/Awards';
import Banner from './components/Banner/Banner';
import Career from './components/Career/Career';
import Logo from './assets/logo/logo.png'
import More from './components/More/More';
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  var navbar = document.getElementById('nav')
  var menu = document.getElementById('menu')

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add('scroll')
    }
    else {
      navbar.classList.remove('scroll')
    }
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <Router>
        <div className="Nav" id='nav'>
          <img src={Logo} className="Logo" alt="" />
          <div className="Routes" id='menu'>
            <a href="#" className='Route'>Home</a>
            <a href="Career" className='Route'>About</a>
            <a href="More" className='Route'>Careers</a>
          </div>
          <p className="Saying">"Not just an office, we're honest"</p>
        </div>
        <Banner />
        <Awards />
        <Career />
        <More />
      </Router>
    </div>
  );
}

export default App;