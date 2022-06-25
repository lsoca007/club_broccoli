import './style.css';
import luis from './images/luis el crack.jpeg';
import miguel from './images/miguel the flash.jpeg';
import javier from './images/el pipa.jpeg';

export default function About() {
    console.log("About");
    return (
      <div className="cards">
        <div className="card"><img src={luis} alt="" /></div>
        <div className="card"><img src={miguel} alt="" /></div>
        <div className="card"><img src={javier} alt="" /></div>
      </div>


    )
}
