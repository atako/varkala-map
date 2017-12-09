/*global google */
import _ from "lodash";
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import BeachCheck from './components/checkboxes/beach'
import AtmCheck from './components/checkboxes/atm'
// import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import { Dropdown, Grid, Sidebar, Segment, Menu, Icon, Button, Checkbox, Label, List, Container, Input } from 'semantic-ui-react'
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
        <Menu attached='top'>
          <Menu.Item onClick={this.toggleVisibility} name='show' active={visible}>
            <Icon name='grid layout' size='large' />
            </Menu.Item>
          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search animals...' />
                <i className='search link icon' />
              </div>
              <div className='results' />
            </div>
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable as={Segment} style={{ padding: 0, margin: 0, border: 0, borderRadius: 0,  }}>
          <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} icon='labeled' vertical style={{ background: '#354051', width: '280px', paddingTop: '30px'}} >
            <Menu.Item name='updates' style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
              <Container>
                <Grid>
                  <Grid.Column width={12}>
                    <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px'}}>
                      <Icon inverted name='shop' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE'}}/>
                  Supermarkets
                </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                  </Grid.Column>
                </Grid>
              </Container>
            </Menu.Item>
            <Menu.Item name='updates' style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
              <Container>
                <Grid>
                    <Grid.Column width={12}>
                    <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                      <Icon inverted name='umbrella' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                      Beaches
                    </div>
                    </Grid.Column>
                    <Grid.Column width={2} >
                      <BeachCheck onClick={this.toggleVisibility}/>
                    </Grid.Column>
                </Grid>
              </Container>
            </Menu.Item>
            <Menu.Item name='updates' style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
              <Container>
                <Grid>
                  <Grid.Column width={12}>
                    <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                      <Icon inverted name='money' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                  ATM
                </div>
                </Grid.Column>
                <Grid.Column widht={2}>
                    <AtmCheck/>
                </Grid.Column>
                </Grid>
              </Container>
            </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic style={{padding: 0, margin: 0}}>
                  <MyMapComponent key="map" />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            
    </div>
    )
  } 
}
    

export default ReactGoogleMaps