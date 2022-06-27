import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Blog from "./components/Blog";
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Burguer from "./components/Burguer Menu/burguer";

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

export default App;
