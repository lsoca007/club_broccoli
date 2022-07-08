import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";

function Home() {

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
    <div className="home_container">
    
          <div className="home_container">
      
        
        { isAuthenticated ? (
            <div className="box_home">
              <div>
                <img className="circle-img" src={user?.profilePictureUrl} alt={user?.name}/>
              </div>
              <div className='user_name'>
                <span> {user?.name}</span>
              </div>
              {/*<div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
              </div>*/}
              <div>
                <button className="hero-button1" onClick={() => logout()}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="box_home">
              <h1>The club you shouldn't join</h1>
                <p>CAUTION</p>
                <p>JOIN AT YOUR OWN RISK</p>
                  <div>
                    <button className="hero-button1" onClick={() => loginWithRedirect()}>Click me to login</button>
                  </div>
                </div>
          )}

      
   
  </div>

    </div>
    
  );
}
 export default Home;