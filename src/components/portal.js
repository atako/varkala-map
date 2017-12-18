import React from 'react'
import {Segment, TransitionablePortal, Icon } from 'semantic-ui-react'
import { showFilter, showPortal, closePortal } from '../actions'
import Loader from './loader/loader'

export default class extends React.Component {
  closePortal = () => this.props.dispatch(closePortal({ showPortal: this.props.ui.showPortal }))
  render() {
    return <TransitionablePortal open={this.props.ui.showPortal} transition={{ animation: 'scale', duration: 400 }}>
      <Segment color='orange' style={{ left: '84.6%', position: 'fixed', top: '30%', zIndex: 1000, height: '60%', width: '200px', paddingTop: '6px' }}>
        <a href='#' onClick={this.closePortal}>
          <Icon name='close' size='large' corner={true} style={{ paddingLeft: '163px', paddingBottom: '20px', marginBottom: '23px' }} />
        </a>
        {this.props.portalState === 'requested' ? <Loader /> :
        <div> <h2>{this.props.portal.title}</h2><p>{this.props.portal.description}</p></div>}
        
      </Segment>
    </TransitionablePortal>
  }
  
}
