import React from "react";
import "./navBar.css";
import logo from "./logo.PNG";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        <span>
          <img className="logo_img" src={logo} alt="avatar_img" />
        </span>{" "}
        Club Broccoli{" "}
      </a>

      <ul>
        <li>
          <a href="/Account">Account</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
