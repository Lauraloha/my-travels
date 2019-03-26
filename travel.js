import React, { Component } from 'react';
import Travel from './travels';

class Travel extends Component {
  render(){
    return (
      <div>
        <h1>My destination is: {this.props.destination} </h1>
        <h2>my country is: {this.props.country} </h2>
        <img src= {this.props.image}></img>
        <h3>distance: {this.props.distance}  </h3>
       </div>
    )
  }
}

export default Travel;
