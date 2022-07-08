import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { FronteggProvider } from '@frontegg/react';


const contextOptions = {

  //baseUrl: 'https://app-dy0ed4tp6md1.frontegg.com',
  baseUrl: 'https://clubbroccoli.frontegg.com',

  clientId: 'd3cd39ab-2377-46c2-99ff-907222d4f52a'

};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
    </FronteggProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
