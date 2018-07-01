import React, {Component} from 'react'
import * as API from './universities'

class universityList extends Component {
  constructor(){
    super();
    this.state ={
    // I create the list to know the value of the clicked list and send it to the map Component
      query:''
  }}
//Udacity's controlled component lessons are the guide
listUpdate=(query)=>{
  this.setState({query: query.trim()})
}

render(){
  return(
    <div className="map-main" role="main">
      <ul className="map-list">
        {this.props.List && this.props.List.map((list) =>(
          <li key= {list.venue.name} tabIndex="0">
            <button role="button" onClick={()=>this.props.showInfo(list)}  className='clickable-places'>
              {list.venue.name}
            </button></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default universityList;
