import React from 'react';
import './navBar.css';
import logo from './logo.PNG';
import logo_light from './logo_light.PNG';
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";


export default function Navbar() {

    const { user, isAuthenticated } = useAuth();
    const loginWithRedirect = useLoginWithRedirect();

    // Uncomment this to redirect to login automatically
    // useEffect(() => {
    //   if (!isAuthenticated) {
    // loginWithRedirect();
    //   }
    // }, [isAuthenticated, loginWithRedirect]);

    const logout = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };
    return (
        <nav className="navbar" >
            <a href="/" className="site-title">
                Club Broccoli
            </a>
            <a href="/" className="logo">
                <img className="logo_img"
                    src={logo_light}
                    alt="avatar_img"
                />
            </a>
            <ul>
               {/* <li>
                    <a href="/Account">Account</a>
                </li> */}
                <li>
                    <a href="/Blog">Blog</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>

                    {isAuthenticated ? (
                        <a className="login" onClick={() => logout()}>Log Out</a>
                    ) : (

                        <a className="login" onClick={() => loginWithRedirect()}>Log In</a>

                    )}
                </li>
            </ul>
        </nav>
    )
}

