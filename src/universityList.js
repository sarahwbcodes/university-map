import React, {Component} from 'react'
import * as API from './universities'

class universityList extends Component {
  constructor(){
    super();
    this.state ={
    // I create the list to know the value of the clicked list and send it to the map Component
    lists: [
      "AlFaisal University", 
      "AlYamamah University", 
      "King Saud University", 
      "Princess Noura Bint Abdulrahman University", 
      "Prince Sultan University"
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
        {this.state.lists.map((name) =>(
          <li key= {name} tabIndex="0">
            <button onClick={()=>this.props.showInfo(name)}  className='clickable-places'>
              {name}
            </button></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default universityList;