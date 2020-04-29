import React, { useState,  Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Circle} from 'google-maps-react';
import coords from './coords';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
};

function dispCircles() {

  console.log(coords)
  return coords.map((store) => {
    return <Circle
      radius={120000}
      center={{ lat: Number(store.CapitalLatitude), lng: Number(store.CapitalLongitude)}}
      strokeColor='transparent'
      strokeOpacity={0}
      strokeWeight={5}
      fillColor='red'
      fillOpacity={0.8}
    />
  })
}

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 48.8566,
          lng: 2.3522
        }}
        zoom={2.5}
      >
        {dispCircles()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDT8niDsJMDOvWCmxCh4n7BCKxpiZleQIg')
})(MapContainer)
