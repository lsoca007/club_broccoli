import React from 'react';
import './style.css';

import dimitri from './images/dimitri.webp';
import Card from './Card';
import contacts from './contact_list';


export default function About() {
    console.log("About");
    return (
      <div>

        <h1 className='heading_about'> In case of emergency, reach our top agents.</h1>
         <div className="cards">
        <Card
      name={contacts[0].name}
      img = {dimitri}
      tel = {contacts[0].phone}
      email ={contacts[0].email}
      />
      <Card
      name={contacts[1].name}
      img = {contacts[1].imgURL}
      tel = {contacts[1].phone}
      email ={contacts[1].email}
      />
      </div>
      </div>
     


    )
}
