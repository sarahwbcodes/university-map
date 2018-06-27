/*global google*/
import React, { Component } from 'react';
import Unilogo from './unilogo.svg';
import MapCo from './mapComponent.js';
import './App.css';

class App extends Component {
  state ={
    lists: [
      "AlFaisal University", "AlYamamah University", "King Saud University", "Princess Noura Bint Abdulrahman University", "Prince Sultan University"
      ]
  }

  render() {
    return (
      <div className="App">
        <header className="map-header" role="header" aria-label="map app header">
          <img src={Unilogo} className="map-img" alt="a blue icon of a globe with a grad cap used as the logo of the app" />
          <h1 className="map-title">Riyadh Universities</h1>
        </header>
        <MapCo
        className="map-comp" aria-label="google map including markers of a couple of riyadh's public and private universities"/>
      </div>
    );
  }
}

export default App;