/*global google*/
import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import GoogleMapReact from 'google-map-react';
//courtesy of the Google Maps React package, this is the starter code from the packages + some personal tweaks
export class MapComponent extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
      google={this.props.google}
      initialCenter={{
        lat: 24.7136,
        lng: 46.6753
      }}
      zoom={10}
      onClick={this.onMapClicked}
      style={{width: '100%', height: '100%', position: 'relative'}}
      className={'map'}
    >
  <Marker
    name={'Prince Sultan University'}
    position={{lat: 24.7347, lng: 46.6980}}
    onClick={this.onMarkerClick}
    animation={this.props.google.maps.Animation.DROP}/>
  <Marker
    name={'King Saud University'}
    position={{lat: 24.7224, lng: 46.6271}}
    onClick={this.onMarkerClick}
    animation={this.props.google.maps.Animation.DROP}/>
  <Marker
    name={'AlFaisal University'}
    position={{lat: 24.6643, lng: 46.6760}}
    onClick={this.onMarkerClick}
    animation={this.props.google.maps.Animation.DROP}/>
    <Marker
    name={'Princess Noura Bint Abdulrahman University'}
    position={{lat: 24.8465, lng: 46.7247}}
    onClick={this.onMarkerClick}
    animation={this.props.google.maps.Animation.DROP}/>
    <Marker
    name={'AlYamamah University'}
    position={{lat: 24.8626, lng: 46.5918}}
    onClick={this.onMarkerClick}
    animation={this.props.google.maps.Animation.DROP}/>

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA_yoxSAEdyEn1s9J8EkIigqIFV-61M4iM"
})(MapComponent)
