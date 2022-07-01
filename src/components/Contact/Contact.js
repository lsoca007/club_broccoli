import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dimitri from './images/dimitri.webp';
import * as React from 'react';

export default function About() {
    console.log("About");
    return (
      <div className="cards">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={dimitri}/>
          <Card.Body>
            <Card.Title>Development Team</Card.Title>
            <Card.Text>
        
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={dimitri}/>
          <Card.Body>
            <Card.Title>Design Team</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={dimitri}/>
          <Card.Body>
            <Card.Title>Marketing Team</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img className = "img" variant="top" src={dimitri}/>
          <Card.Body>
            <Card.Title>Dimitri</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
      </div>


    )
}
