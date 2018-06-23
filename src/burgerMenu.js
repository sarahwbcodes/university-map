//react burger menu package starter code for the burger component.
//chunks of code were provided by google-maps-react package.
/*global google*/
import { slide as Menu } from 'react-burger-menu'
import {InfoWindow, Marker} from 'google-maps-react';

class Menu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    { this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.props.google.selectedPlace.animation.BOUNCE};


  render () {
    return (
      <Menu>
        <a id="PSU" className="menu-item" onClick={this.onMarkerClick} href="/">Prince Sultan University</a>
        <a id="AU" className="menu-item" onClick={this.onMarkerClick} href="/about">AlFaisal University</a>
        <a id="KSU" className="menu-item" onClick={this.onMarkerClick} href="/contact">King Saud University</a>
        <a id="YU" className="menu-item" onClick={this.onMarkerClick} href="/contact">AlYamamah University</a>
        <a id="PNU" className="menu-item" onClick={this.onMarkerClick} href="/contact">Princess Noura University</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
