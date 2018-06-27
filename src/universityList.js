import React, {Component} from 'react'

class universityList extends Component {
  state ={
    // I create the list to know the value of the clicked list and send it to the map Component
    lists: [
      "AlFaisal University", "AlYamamah University", "King Saud University", "Princess Noura Bint Abdulrahman University", "Prince Sultan University"
      ]
  }

/// you should write the search box
render(){
  return(
    <div className="map-main" role="main">
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