import './style.css';
import luis from './images/luis el crack.jpeg';
import miguel from './images/miguel the flash.jpeg';
import javier from './images/el pipa.jpeg';
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dimitri from './images/dimitri.webp';

export default function About() {
    console.log("About");
    return (
      <div className="cards">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={luis}/>
          <Card.Body>
            <Card.Title>Luis</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={miguel}/>
          <Card.Body>
            <Card.Title>Miguel</Card.Title>
            <Card.Text>
              The Selfie Man
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={javier}/>
          <Card.Body>
            <Card.Title>Javier</Card.Title>
            <Card.Text>
              The Side-Business Man
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={dimitri}/>
          <Card.Body>
            <Card.Title>Dimitri</Card.Title>
            <Card.Text>
              Paint Houses
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
      </div>


    )
}
