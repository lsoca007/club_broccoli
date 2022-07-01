import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

import React, { Component }  from 'react';
import founder from './images/Adam.JPG'

const name = "Luis Socarras"
const currentDate = new Date();
const year = currentDate.getFullYear();

export default function About() {
    console.log("About");
    return (
     <div> 

        <h1>History</h1> 
        <td>
            <img src={founder} class = "image" alt="Andrew Green"/>
        </td>
        <td>
            <p className ="description" style={{fontSize: "2rem"}}>On April 15, 1768, professor Andrew Green established the Broccolinity in Florida. Green attempted to abandon organized religion in favor of a new style of enlightenment through reason because he was repulsed by the influence of the traditional Catholic Church and the Bavarian monarchy. He was also influenced by the Enlightenment's growth throughout Europe, the Mysteries of the Seven Sages of Memphis, the Kabbalah, and freemasonry. He was a former member of the Jesuit order. He made significant inroads into masonic lodges in an effort to enlist some of the most powerful and wealthy persons in Europe, particularly recruiting from the latter group.</p>
        </td>  
            <p> The Broccolinity society served as the inspiration for the esoteric Club Broccoli, which was established at Yale University in New Haven, Connecticut, in 1953. The first Club Broccoli Meeting was in 1954 and held at the Hotel de Bilderberg in the Netherlands. Prince Bernhard of the Netherlands organized a meeting of prominent politicians from North America and Europe to promote better ties between the two continents in the face of rising anti-American sentiment in Europe.</p>
        
        <h1>Conspiracy Theories</h1> 
        <p>The level of secrecy surrounding the Club Broccoli Meeting has given rise to several legends, including unproven theories that members were responsible for the European Union's founding, the war of Iraq, and the bombing of Serbia. The organisation has been accused of creating a new world government by conspiracy theorists.</p>

        <p>Club Broccoli rituals are shrouded in mystery, yet they have captured the public's attention in movies and television, and they were even made fun of in an episode of &quot;The Simpsons.&quot; </p>
        <h1>Broccolinist Beliefs</h1>
        <p>Though believers in a Supreme Being or &quot;Grand Master of the Universe&quot; are encouraged by Broccolianits, the organization is not a religion.</p>
        
        <div >
            <p className="copyright">Created by {name}</p>
            <p className="copyright">Copyright {year}</p>
        </div>
        
     </div>


    )
}
