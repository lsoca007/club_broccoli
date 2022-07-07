import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact.jsx";
import Auth from "./components/Account/Auth";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from "./components/Footer";



function App() {



  return (
    <div>
     <Router>
        <div className="App">
          <Navbar />
          <Footer/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/Blog" element={<Blog/>}></Route>
              <Route path="/Account" element={<Auth />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
    
    
    );

}

export default App;
