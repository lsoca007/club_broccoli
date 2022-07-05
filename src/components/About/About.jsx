import './style.css';
import React from 'react';
import founder from './images/Adam.JPG';
import prince from './images/prince.JPG';
import miguelpic from './images/miguel.JPG';
import symbol from './images/sign.png';
import eu from './images/EU.JPG';
import tree from './images/tree.jpg';


export default function About() {
    console.log("About");
    return (
     <div> 
        
        
        <div className='about_content'>
            
            <img src={founder} className = "image" alt="Andrew Green" />
            <div className='block'>
                <h1>History</h1> 
                <p >On April 15, 1768, professor Andrew Green established the Broccolinity in Florida. Green attempted to abandon organized religion in favor of a new style of enlightenment through reason because he was repulsed by the influence of the traditional Catholic Church and the Bavarian monarchy. He was also influenced by the Enlightenment's growth throughout Europe, the Mysteries of the Seven Sages of Memphis, the Kabbalah, and freemasonry. He was a former member of the Jesuit order. He made significant inroads into masonic lodges in an effort to enlist some of the most powerful and wealthy persons in Europe, particularly recruiting from the latter group.</p>  
            </div>
            
           
            <img src ={prince} className = "image" alt = "Prince Berndense" />
            <div className='block'>
                 <p> The Broccolinity society served as the inspiration for the esoteric Club Broccoli, which was established at Yale University in New Haven, Connecticut, in 1953. The first Club Broccoli Meeting was in 1954 and held at the Hotel de Bilderberg in the Netherlands. Prince Berndense of the Netherlands organized a meeting of prominent politicians from North America and Europe to promote better ties between the two continents in the face of rising anti-American sentiment in Europe.</p>

            </div>
          
        
            <img src={eu} className = 'image' alt = "EU" />
            <div className='block'>
                <h1>Conspiracy Theories</h1>
                <p>The level of secrecy surrounding the Club Broccoli Meeting has given rise to several legends, including unproven theories that members were responsible for the European Union's founding, the war of Iraq, and the bombing of Serbia. The organisation has been accused of creating a new world government by conspiracy theorists.</p>
            </div>

            <img src={miguelpic} className = 'image' alt = "Miguel with Trump" />
            <div className='block'>    
                <p>Club Broccoli rituals are shrouded in mystery, yet they have captured the public's attention in movies and television, and they were even made fun of in an episode of &quot;The Simpsons.&quot; </p>
            </div>    
    
            <img src= {symbol} className = 'image'  alt = "symbol" />
            <div className='block'>
                <h1>Broccolinist Beliefs</h1>
                <p>Though believers in a Supreme Being or &quot;Grand Master of the Universe&quot; are encouraged by Broccolianits, the organization is not a religion.</p>
            </div>

            <img src={tree} className='image' alt="tree of life" />
            <div className='block'>
                <p>
                    The presence of broccoli serves as a reminder of the tree of life. Life is a journey.
                    Nobody is perfect in life; everyone is still learning. Share the journey with others by reaching out to them. 
                    
                    Life is about growth. Moving in the right direction can occasionally be difficult, but as with everything in life, 
                    this discomfort is only momentary. You can rediscover your love for yourself with broccoli. It balances the heart chakra
                     and makes you more open to receiving more love from other people.
                </p>
            </div>

        </div>
        
     </div>


    )
}
