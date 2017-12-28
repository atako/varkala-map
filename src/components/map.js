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
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox")

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
        icon={props.activeIcon === item.id ? `/icons/${item.category}_active.png` : `/icons/${item.category}.png`}
        onMouseOver={props.activeIcon === item.id ? null: () => props.toggleInfoWindow(item.id)}
        onMouseOut={props.activeIcon === item.id ? null : () => props.toggleInfoWindow(item.id)}
        onClick={() => props.fetchInfo(item)}
        visible={item.visible}
      >
        {item.infoWindow ? <InfoBox
          defaultPosition={new google.maps.LatLng(item.lat, item.lng)}
          options={{ 
            closeBoxURL: ``,
            enableEventPropagation: true,
            pixelOffset: new google.maps.Size(8, -59),
            boxStyle: {
              // padding: "0px 0px 0px 0px",
              maxWidth: "250px",
              textAlign: "center",
              whiteSpace: 'nowrap',
              borderRadius: '40px',
              borderBottomLeftRadius: '0px',
              borderTopLeftRadius: '20px',
              // border: '0.5px solid #bbb',
              boxShadow: '3px -3px 3px 0px rgba(0, 0, 0, 0.15)',
              opacity: '0.95',
              background: 'hsla(0,0%,100%,.8)'
            }
           }}
        >
            
          <div className='infoBox' style={{ 
            overflow: 'hidden',
            background: '#fff' 
          }}>
              
            <div style={{ 
              fontFamily: 'Open Sans',
              fontWeight: '400',
              margin: '5px 12px 5px 8px',
              textOverflow: 'ellipsis',
              fontSize: `14px`, 
              fontColor: `#444444` }}>
             {item.title}
            </div>
          </div>
        </InfoBox>
        // <InfoWindow>
        //   <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `-3px` }}>
        //     <div style={{
        //       fontFamily: 'Open Sans',
        //       fontSize: '14px',
        //       fontWeight: '600', }}>
        //       {item.title}
        //     </div>
        //   </div>
        // </InfoWindow>
         : null }
        {props.activeIcon === item.id ? <InfoBox
          defaultPosition={new google.maps.LatLng(item.lat, item.lng)}
          options={{
            closeBoxURL: ``,
            enableEventPropagation: true,
            pixelOffset: new google.maps.Size(8, -59),
            boxStyle: {
              // padding: "0px 0px 0px 0px",
              maxWidth: "250px",
              textAlign: "center",
              whiteSpace: 'nowrap',
              borderRadius: '40px',
              borderBottomLeftRadius: '0px',
              borderTopLeftRadius: '20px',
              // border: '0.5px solid #ffccd2',
              boxShadow: '3px -3px 3px 0px rgba(0, 0, 0, 0.2)',
              opacity: '0.95',
              background: 'hsla(0,0%,100%,.8)'
            }
          }}
        >

          <div className='infoBox' style={{
            overflow: 'hidden',
            background: '#fff'
          }}>

            <div style={{
              fontFamily: 'Open Sans',
              fontWeight: '600',
              margin: '5px 12px 5px 8px',
              textOverflow: 'ellipsis',
              fontSize: `14px`,
              fontColor: `#444444`
            }}>
              {item.title}
            </div>
          </div>
        </InfoBox> : null}
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
    return <MyMapComponent
        togglePortal={this.togglePortal}
        toggleInfoWindow={this.toggleInfoWindow}
        objects = {this.props.objects}
        fetchInfo = {this.props.fetchInfo}
        activeIcon = {this.props.activeIcon}
     />
  }
}