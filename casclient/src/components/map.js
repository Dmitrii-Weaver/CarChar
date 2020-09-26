import React, { Component } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`
export default class Map extends Component {
   componentDidMount(){
       this.map = L.map('map', {
           center:[65, 25],
           zoom:5,
           zoomControl: true
       })
       L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
           detectRetina: true,
           maxZoom: 19,
           maxNativeZoom:17
       }).addTo(this.map)
   }
   render(){
       return <Wrapper width="100%" height="600px" id="map"/>
   }
}
