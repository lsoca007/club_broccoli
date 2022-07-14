import React from 'react';
import './style.css';

import dimitri from './images/dimitri.webp';
import Card from './Card';
import contacts from './contact_list';


function createCard(contact) {
  return <Card
      key = {contact.id}
      name = {contact.name}
      img ={contact.imgURL}
      tel ={contact.phone}
      email = {contact.email}
    />;
  
}

export default function About() {
    console.log("About");
    return (
      <div>

        <h1 className='heading_about'> In case of emergency, reach our top agents</h1>
         <div className="cards">
         {contacts.map(contact => (
            <Card
              key = {contact.id}
              name = {contact.name}
              img ={contact.imgURL}
              tel ={contact.phone}
              email = {contact.email}
            />
         ))}
        
      </div>
      </div>
     


    )
}
