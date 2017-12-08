/*global google */
import _ from "lodash";
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import { Grid, Sidebar, Segment, Menu, Icon, Button, Checkbox } from 'semantic-ui-react'
const style = require('./mapstyle.json')
// const google = window.google
const icon = {
  path: 'd="M275,175 v-150 a150,150 0 0,0 -150,150 z"', // 'M -2,0 0,-2 2,0 0,2 z',
  fill: 'yellow',
  stroke: 'blue',
}

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
      defaultCenter={{ lat: 8.737457, lng: 76.708158}}
      defaultOptions={{
        styles: style,
        streetViewControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER
        } }}
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

// const enhance = _.identity;

class ReactGoogleMaps extends React.Component {
  state = { visible: true }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Grid>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
            <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical color='red'>
                <Menu.Item name='home'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item name='gamepad'>
                    {/* <Segment compact inverted color='black'> */}
                      <Icon name='money' />
                      ATM
                    {/* </Segment> */}
                      <Checkbox slider />
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic style={{padding: 0}}>
                  <MyMapComponent key="map" />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
    )
  } 
}
    

export default ReactGoogleMaps