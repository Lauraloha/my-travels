import React, { Component } from 'react';
import './App.css';
import Travel from './travel';

class App extends Component {
  render(){
    return (
      <div>
        <Travel destination= "Manille" country="Philippines" image="https://asianwanderlust.com/wp-content/uploads/2017/03/Port-Barton-Palawan-Philippines-Tour-A-Couverture-1110x740.jpg" distance="11 313 km de Bidart"/>
        <Travel destination= "Osaka" country="Japon" image="https://media.worldnomads.com/Explore/shinsekai-district.jpg" distance="10 291km de Bidart"/>
      </div>
    )
  }
}


export default App;
