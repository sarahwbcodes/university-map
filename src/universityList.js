import React, {Component} from 'react'
import * as API from './universities'

class universityList extends Component {
  constructor(){
    super();
    this.state ={
    // I create the list to know the value of the clicked list and send it to the map Component
    lists: [
      {name:"AlFaisal University" , position: {lat: 24.664930700770164, lng: 46.67787865440406}},
      {name: "AlYamamah University", position: {lat: 24.86366401158759, lng: 46.59419775009155}},
      {name: "King Saud University", position: {lat: 24.724761378957492, lng: 46.62260004907829 } },
      {name: "Princess Noura Bint Abdulrahman University", position: {lat: 24.85076709581032, lng: 46.72084095898374}},
      {name:"Prince Sultan University", position: {lat: 24.73549191880903, lng: 46.6995250461035}}
      ],
      query:''
  }}

 uniUpdate = (query, lat, lng, data) => {
    this.setState({
      query: data
    })
    this.uniSearch(lat, lng);
  }

  uniSearch(query) {
   API(query).then(data => {
      data ?
      this.setState({data}) : this.setState({query:[]})
      console.log(data);
  }).catch(err =>
    window.alert(err)
  )}

render(){
  return(
    <div className="map-main" role="main">
    <div>
    <input type="text" value={this.state.query} onChange={this.uniUpdate.bind(this)}/>
      </div>
      <ul className="map-list">
        {this.state.lists.map((list) =>(
          <li key= {list.name} tabIndex="0">
            <button onClick={()=>this.props.showInfo(list)}  className='clickable-places'>
              {list.name}
            </button></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default universityList;
