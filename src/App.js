/*global google*/
import React, { Component } from 'react';
import Unilogo from './unilogo.svg';
import MapCo from './mapComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="map-header" role="header" aria-label="map app header">
          <img src={Unilogo} className="map-img" alt="a blue icon of a globe with a grad cap used as the logo of the app" />
          <h1 className="map-title">The Riyadh Universities Map</h1>
        </header>
        <p className="map-main" role="main">
<ul>
  
      <li>  <button> AlFaisal University</button> </li>

      <li>  <button>AlYamamah University</button> </li>

      <li>  <button>King Saud University</button> </li>

      <li>  <button>Princess Noura Bint Abdulrahman University</button> </li>
      <li> <button> Prince Sultan University</button></li>
</ul>
        </p>
        <MapCo google={this.props.google}
        className="map-comp" aria-label="google map including markers of a couple of riyadh's public and private universities"/>
      </div>
    );
  }
}

export default App;
