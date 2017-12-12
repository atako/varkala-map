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
import { showFilter, showPortal } from '../actions'
const style = require('../mapstyle.json')

const MyMapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?AIzaSyBBNTji--JP2BD3lbsA8aLUIRRklOCunQA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
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
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        fullscreenControl: false
      }}
      fullscreenControl={false}
    >
    {props.objects.map((item, i) => 
        <Marker
          key={i}
          position={{ lat: item.lat, lng: item.lng }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: item.color,
            scale: 4,
            strokeColor: item.color,
            strokeWeight: 8
          }}
          onClick={props.togglePortal}
          visible={item.visible}
        >
        {/* {props.isOpen &&
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>Krishna market</div>
          </InfoWindow>} */}
      </Marker>
    )}
    </GoogleMap>
  )
  )

export default class Map extends React.Component {
  togglePortal = () => this.props.dispatch(showPortal({ showPortal: this.props.ui.showPortal }))
  render() {
    return <MyMapComponent
        togglePortal={this.togglePortal}
        objects ={this.props.objects}
     />
  }
}