import React from 'react';
import './navBar.css';
import logo from './logo.PNG';
import logo_light from './logo_light.PNG';

export default function Navbar() {
    return (
        <nav className = "navbar" >
            <a href = "/" className = "site-title">
                Club Broccoli
            </a>
            <a href = "/" className="logo">
                <img className="logo_img"
                    src= {logo_light}
                    alt="avatar_img"
                    />
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
    )
}

