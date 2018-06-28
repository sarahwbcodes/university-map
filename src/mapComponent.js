import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as API from './universities'
import List from './universityList'
//import GoogleMapReact from 'google-map-react';
//courtesy of the Google Maps React package, this is the starter code from the packages + some personal tweaks
export class MapComponent extends Component {
constructor(){
  super();
  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: '',
    position: {},
   Universities:[]
  };
}
componentDidMount(){
  window.gm_authFailure = this.gm_authFailure;
}

  componentWillMount() {
    API.getAll().then(res => {
      this.setState({Universities: res.response.list.listItems.items})
      console.log(this.state.Universities);
  })

      //console.log(this.state.Universities);
    }

  onMarkerClick = (uni) =>{
    console.log(uni);
    this.setState({
      selectedPlace: uni.name,
      position: uni.position,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
gm_authFailure(){
  window.alert("Google Maps Error!")
}

showInfo = (list)=>{
   //get the the position of the name, then show the info window
  this.setState({
      selectedPlace: list.name,
      position: list.position,
      showingInfoWindow: true
    });
  }
  render() {
    return (
      <div>
        <List
          showInfo= {this.showInfo}/>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 24.7136,
            lng: 46.6753
          }}
          zoom={10}
          onClick={this.onMapClicked}
          style={{width: '100%', height: '85%', position: 'absolute'}}
          className={'map'}
          >
          {
            this.state.Universities.map((uni)=>
            <Marker key={uni.venue.name}
              name={uni.venue.name}
              position={{lat:uni.venue.location.lat, lng:uni.venue.location.lng}}
              onClick={this.onMarkerClick}
              />
          )
        }
          <InfoWindow
            position={this.state.position}
            visible={this.state.showingInfoWindow}
            >
            <div>
              <h1>{this.state.selectedPlace}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA_yoxSAEdyEn1s9J8EkIigqIFV-61M4iM"
})(MapComponent)