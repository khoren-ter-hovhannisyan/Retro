import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import actionCable from 'actioncable';
import reportWebVitals from './reportWebVitals';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:5200/cable')
ReactDOM.render(
  <React.StrictMode>
    <App cableApp={CableApp} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()