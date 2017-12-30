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
                  width: '280px',
                  maxHeight: '80%',
                  top: '150px',
                  right: '10px',
                  padding: '0',
                  boxShadow: '-3px 10px 69px 0px rgba(68,68,68,0.63)',
                  border: 'solid white 0px',
                  
              }}>
        <div style={{
          position: 'relative',
          height: '160px',
          display: 'flex',
          backgroundImage: `url(${this.props.currentPoint.img})`,
          backgroundSize: 'cover',
        }} />
        <a href='#' onClick={this.closePortal}>
        <span>
          <div 
            // corner={true} 
            style={{ 
              position: 'absolute',
              top: '0px',
              right: '0px',
              cursor: 'pointer',
              width: '20px',
              height: '20px',
              backgroundColor: '#555',
              opacity: '0.7'
             }} > 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path  fill-width="5" fill="#fff" d="M12 10.586L8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414L12 10.586z"></path></svg>
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
          backgroundColor: '#ffffff',
          overflow: 'auto',
          maxHeight: '400px',
          position: 'relative',
        }}
        >
          <div style={{
            fontFamily: 'Open Sans',
            fontSize: '27px',
            fontWeight: '600',
            marginTop: '20px',
            marginBottom: '10px',
            color: '#333333'
          }}>{this.props.currentPoint.title}</div>
            <div style={{
              fontFamily: 'Open Sans',
              fontSize: '20px',
              fontWeight: '600',
              marginTop: '5px',
              marginBottom: '17px',
              color: '#555555'
            }}>{this.props.currentPoint.en_title}</div>
          <div style={{
              fontFamily: 'Open Sans',
              fontSize: '15px',
              fontWeight: '400',
              marginTop: '10px',
              marginBottom: '20px',
              color: '#333333',
              lineHeight: '1.4em'
          }}>{this.props.portal.description}</div>
          {/* <Button color='green'>Подробнее</Button> */}
        </div>}
        
      </Segment>
    </TransitionablePortal>
  }
  
}
