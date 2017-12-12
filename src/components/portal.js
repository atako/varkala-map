import React from 'react'
import {Segment, TransitionablePortal, Icon } from 'semantic-ui-react'
import { showFilter, showPortal } from '../actions'

export default class extends React.Component {
  togglePortal = () => this.props.dispatch(showPortal({ showPortal: this.props.ui.showPortal }))
  render() {
    return <TransitionablePortal open={this.props.ui.showPortal} transition={{ animation: 'scale', duration: 400 }}>
      <Segment color='orange' style={{ left: '84.6%', position: 'fixed', top: '10%', zIndex: 1000, height: '60%', width: '200px', paddingTop: '6px' }}>
        <a href='#' onClick={this.togglePortal}>
          <Icon name='close' size='large' corner={true} style={{ paddingLeft: '163px', paddingBottom: '20px', marginBottom: '23px' }} />
        </a>
        <p>Portals have tons of great callback functions to hook into.</p>
        <p>To close, simply click the close button or click away</p>
      </Segment>
    </TransitionablePortal>
  }
  
}
