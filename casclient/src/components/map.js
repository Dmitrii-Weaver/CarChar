import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
    width: '49%',
    height: '630px'
  }

export class MapContainer extends Component  {
  render() {
    return (
      <Map google={this.props.google}
      style={style}
      initialCenter={{
        lat: 65.012093,
        lng: 25.465076
      }}
      zoom={5}>
          
        <Marker onClick={this.onMarkerClick} name={'Current location'} position={{ lat: -34.397, lng: 150.644 }}/>
 

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAPIhlHx1M9RhadWY7xZjBGTAGkmT2jJZY")
})(MapContainer)