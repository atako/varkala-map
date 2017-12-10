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
const style = require('../mapstyle.json')
// import default from "semantic-ui-react/dist/commonjs/elements/Loader/Loader";

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
  (props => (
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
      <Marker
        position={{ lat: 8.737457, lng: 76.708158 }}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#5d00ff',
          scale: 5,
          strokeColor: '#5d00ff',
          strokeWeight: 5
        }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen &&
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>Krishna market</div>
          </InfoWindow>}
      </Marker>
      <Marker
        position={{ lat: 8.751191, lng: 76.701988 }}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#5d00ff',
          scale: 4,
          strokeColor: '#5d00ff',
          strokeWeight: 2
        }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen &&
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>Big supermarket</div>
          </InfoWindow>}
      </Marker>
    </GoogleMap>
  )
  )

  export default MyMapComponent