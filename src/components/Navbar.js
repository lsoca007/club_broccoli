import * as React from 'react';

export default function Navbar() {
    return (
        <nav className = "nav" >
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
