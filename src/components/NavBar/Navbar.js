import React from 'react';
import './navBar.css';

export default function Navbar() {
    return (
        <nav className = "navbar" >
            <a href = "/" className = "site-title">
                Club Broccoli
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
