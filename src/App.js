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
        <MapCo google={this.props.google}
        className="map-comp" aria-label="google map including markers of a couple of riyadh's public and private universities"/>

        <p className="map-main" role="main">
<ul>
      <li>  <button> AlFaisal University</button> </li>
      <li>  <button>AlYamamah University</button> </li>
      <li>  <button>King Saud University</button> </li>
      <li>  <button>Princess Noura Bint Abdulrahman University</button> </li>
</ul>

        <footer role="footer" aria-label="footer with a copyright statement for logo">
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
        </p>
      </div>
    );
  }
}

export default App;
