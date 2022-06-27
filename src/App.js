import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import Navbar from './components/Navbar';
import About from './components/About/About.jsx';
import Blog from './components/Blog/Blog';
import Home from './components/Home';
import Contact from './components/Contact/Contact';

function App() {

  let component

  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Blog":
      component = <Blog />
      break;  
    case "/about":
      component = <About />
      break; 
    case "/Contact":
      component = <Contact />
      break;
  }




  return ( 
  <>
    <Navbar/>
    {component}
  </>
  
  
  )
}

export default App;
