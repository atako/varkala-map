import React from 'react'
import {Segment, TransitionablePortal, Icon, Image, Button } from 'semantic-ui-react'
import { showFilter, showPortal, closePortal } from '../actions'
import Loader from './loader/loader'

export default class extends React.Component {
  closePortal = () => this.props.dispatch(closePortal({ showPortal: this.props.ui.showPortal }))
  render() {
    return <TransitionablePortal 
            open={this.props.ui.showPortal} 
            transition={{ animation: 'scale', duration: 300 }}
          >
      <Segment 
        style={{  position: 'absolute',
                  width: '270px',
                  minHeight: '200px',
                  top: '150px',
                  right: '5px',
                  overflow: 'hidden',
                  padding: '0',
                  boxShadow: '-3px 10px 69px 0px rgba(68,68,68,0.63)',
                  border: 'solid white 0px'
              }}>
        <div style={{
          position: 'relative',
          height: '150px',
          display: 'flex',
          background: 'url(./images/black_beach.jpg)',
          backgroundSize: 'cover'
        }} />
        <a href='#' onClick={this.closePortal}>
        <span>
          <div 
            // corner={true} 
            style={{ 
              position: 'absolute',
              top: '6px',
              right: '7px',
              cursor: 'pointer'
             }} > 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="#fff" d="M12 10.586L8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414L12 10.586z"></path></svg>
             </div>
          </span>
        </a>
        {this.props.portalState === 'requested' ? <Loader /> :
        <div style={{
          paddingTop: '0.2em',
          paddingLeft: '1em',
          paddingRight: '0.7em',
          paddingBottom: '2em',
          color: '#333333', 
          fontFamily: 'Open Sans', 
          backgroundColor: '#ffffff'}}
        >
          <div style={{
            fontFamily: 'Open Sans',
            fontSize: '27px',
            fontWeight: '600',
            marginTop: '20px',
            marginBottom: '10px',
            color: '#333333'
          }}>{this.props.portal.title}</div>
            <div style={{
              fontFamily: 'Open Sans',
              fontSize: '20px',
              fontWeight: '600',
              marginTop: '5px',
              marginBottom: '17px',
              color: '#555555'
            }}>{this.props.portal.en_title}</div>
          <div style={{
              fontFamily: 'Open Sans',
              fontSize: '15px',
              fontWeight: '400',
              marginTop: '10px',
              marginBottom: '20px',
              color: '#333333',
              lineHeight: '1.4em'
          }}>{this.props.portal.description}</div>
          <Button color='green'>Подробнее</Button>
        </div>}
        
      </Segment>
    </TransitionablePortal>
  }
  
}
