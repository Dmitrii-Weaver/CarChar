import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
    width: '49%',
    height: '630px'
  }

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
      style={style}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}>
          
        <Marker onClick={this.onMarkerClick}name={'Current location'} />
 

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAPIhlHx1M9RhadWY7xZjBGTAGkmT2jJZY")
})(MapContainer)