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
        icon={`/icons/${item.category}.png`
        }
        onMouseOver={() => props.toggleInfoWindow(item.id)}
        onMouseOut={() => props.toggleInfoWindow(item.id)}
        onClick={() => props.fetchInfo(item)}
        visible={item.visible}
      >
      { item.infoWindow ? <InfoWindow>
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