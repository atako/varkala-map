import React, { Component, ReactDOM } from 'react'
import { GoogleApiWrapper, Map } from 'google-maps-react'
import logo from './logo.svg';
import './App.css';

export class Container extends React.Component {
  render() {
    const style = {
      width: '10vw',
      height: '10vh'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
        <Map google={this.props.google} 
          zoom={15} 
          initialCenter={{
            lat: 8.7335766,
            lng: 76.7073323
          }}
          
          
        />
      </div>
    )
  }
}

// export class Map extends React.Component {
//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const { google } = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig);
//     }
//   }

//   render() {
//     return (
//       <div ref='map'>
//         {this.loadMap()}
//       </div>
//     )
//   }
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBBNTji--JP2BD3lbsA8aLUIRRklOCunQA'
})(Container)
