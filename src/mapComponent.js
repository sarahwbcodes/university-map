import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as API from './universities'
import List from './universityList'
import escapeRegExp from 'escape-string-regexp'
//import GoogleMapReact from 'google-map-react';
//courtesy of the Google Maps React package, this is the starter code from the packages + some personal tweaks
export class MapComponent extends Component {
constructor(){
  super();
  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: '',
    position: {lat: 24.713, lng:46.6753 },
   Universities:[],
   query: '',
   queryResult:[],
   noMapError: true
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
        activeMarker: this.props.google.maps.Animation.BOUNCE
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
      showingInfoWindow: true,
      activeMarker: this.props.google.maps.Animation.BOUNCE
    });
  }

  listUpdate=(query)=>{
  this.setState({query: query.trim()})
}


  render() {
    let uniResults
  if (this.state.query){
    const result = new RegExp(escapeRegExp(this.state.query),'i')
  uniResults = this.state.Universities.filter((list) => result.test(list.venue.name))
}else {
  uniResults = this.state.Universities
}
      return (
        <div>
              <div>
    <input role="search" 
    tabIndex="0"
    placeholder="Enter University"
    aria-label="a way to filter the list items" 
    className="map-filter"
    type="text" value={this.state.query}
    onChange={(event)=> this.listUpdate(event.target.value)}/>
      </div>
          <List
            showInfo= {this.showInfo}
            List={uniResults}
            onClick={this.onMarkerClick}
            />
          {this.state.noMapError? (
          <Map
            google={this.props.google}
            initialCenter={{
              lat: parseFloat(24.7136),
              lng: parseFloat(46.6753)
            }}
            zoom={10}
            onClick={this.onMapClicked}
            style={{width: '100%', height: '85%', position: 'absolute'}}
            className={'map'}
            >
            {console.log(uniResults)}{
              uniResults.map((uni)=>
              <Marker key={uni.venue.id}
                name={uni.venue.name}
                position={{lat: parseFloat(uni.venue.location.lat), lng: parseFloat(uni.venue.location.lng)}}
                onClick={this.onMarkerClick}
                animation={this.props.google.maps.Animation.DROP}
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
          </Map> ): (<h1> check your internet </h1>)}
        </div>
      )
    }
  }
export default GoogleApiWrapper({
  apiKey: "AIzaSyA_yoxSAEdyEn1s9J8EkIigqIFV-61M4iM"
})(MapComponent)
