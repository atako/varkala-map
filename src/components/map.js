/*global google */
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
// import styled from 'styled-components'
import { showFilter, showPortal, showInfoWindow, fetchInfo } from '../actions'
import './map.css'
const style = require('../mapstyle.json')

const MyMapComponent = compose(
  // withStateHandlers(() => ({
  //   isOpen: false,
  //   size: 0.35
  // })),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?AIzaSyBBNTji--JP2BD3lbsA8aLUIRRklOCunQA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100vh` }} />,
    containerElement: <div style={{
      height: '100vh'
    }} /> ,
    mapElement: <div style={{
      height: '100vh'
    }} />
  }),
  withScriptjs,
  withGoogleMap
)
  (props =>(
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 8.737457, lng: 76.708158 }}
      defaultOptions={{
        styles: style,
        streetViewControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        fullscreenControl: false
      }}
      fullscreenControl={false}
    >
    {props.objects.map((item, i) =>
      <Marker
        key={i}
        position={{ lat: item.lat, lng: item.lng }}
        icon={'/icons/shoppingbag_pinlet-2-medium.png'
          // path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
          // fillColor: '#4f98f0',
          // fillOpacity: 1,
          // strokeColor: '#333333',
          // // anchor: new google.maps.Point(0, 0),
          // strokeWeight: item.infoWindow ? 1 : 0,
          // scale: item.infoWindow ? 0.5 : 0.5,
          // label: 'a'
        }
        
        // onMouseOver={props.onToggleOpen}
        // onMouseOut={props.onToggleOpen}
        onMouseOver={() => props.toggleInfoWindow(item.id)}
        onMouseOut={() => props.toggleInfoWindow(item.id)}
        onClick={() => props.fetchInfo(item.id)}
        visible={item.visible}
      >
      { item.infoWindow ? <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>{item.title}</div>
        </InfoWindow> : null }
      </Marker>
    )}
      
    )}
    </GoogleMap>
  )
  )

export default class Map extends React.Component {
  togglePortal = (id) => this.props.showPortal({ showPortal: this.props.ui.showPortal, id: id })
  toggleInfoWindow = (id) => this.props.showInfoWindow({ id: id })
  fetchInfo = (id) => this.props.fetchInfo(id)
  render() {
    // console.log(this.props)
    return <MyMapComponent
        togglePortal={this.togglePortal}
        toggleInfoWindow={this.toggleInfoWindow}
        objects = {this.props.objects}
        fetchInfo = {this.props.fetchInfo}
     />
  }
}