import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>

      <div onClick={props.onClick}>
        This div has been clicked {props.clicks} times.
      </div>
    </div>
  );
}

export default App;
