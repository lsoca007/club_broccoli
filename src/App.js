import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import Navbar from './Navbar';

class App extends Component {
  constructor(){
    super();

    this.state = {
      maquinas: [
        {
          name: 'Luis',
          id: '7536',
        }, 
        {
          name: 'Javier',
          id: '3644',
        },
        {
          name: 'Miguel',
          id: '4679',
        },
      ]
      
    };
  }

  render() {
    return (
    
    <div className="App">
      <Navbar/>
      {
        
        this.state.maquinas.map( (maquinas) => {
          return <h1 key = {maquinas.id}>{maquinas.name}</h1>;
        })
      }
      
    </div>
  );
  }
  
}

export default App;
