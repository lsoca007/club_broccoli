import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Burguer from "./components/Burguer Menu/burguer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import * as React from 'react';

/*

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Blog":
      component = <Blog />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Blog" element={<Blog/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    );
}

export default App;
