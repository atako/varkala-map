import React from 'react'
import Map from '../containers/map'
import Portal from '../containers/portal'
import LeftSidebar from '../containers/leftSidebar'
import { showFilter, showPortal } from '../actions'
import { Menu, Icon, Sidebar, Segment, Grid } from 'semantic-ui-react'
import Styled from 'styled-components'
import MobileDetect from 'mobile-detect'
import { componentWillUnmount, componentDidMount } from 'react-google-maps/lib/utils/MapChildHelper';

const StyledLogo = Styled(Menu.Item)`
  &&&&:before {
    width: 0px;
  }
  `
export default class Interface extends React.Component {

  toggleVisibility = () => this.props.dispatch(showFilter({ showFilter: this.props.ui.showFilter }))
  togglePortal = () => this.props.dispatch(showPortal({ showPortal: this.props.ui.showPortal }))
  hideFilter = () => this.props.dispatch(showFilter({ showFilter: true }))

  componentDidMount () {
    const isMobile = window.innerWidth <= 500
    if (isMobile) {
      console.log('hi')
      this.hideFilter()
    }
  }
  render() {
    const isMobile = window.innerWidth <= 500
    console.log (isMobile)
    return (
      <div style={{ position: 'fixed', width: '100%'}}>
        {/* <Sidebar as={Menu} animation='push' direction='top' visible inverted style={{ background: '#37394D' }} style={{ padding: 0, margin: 0, border: 0, borderRadius: 0}} > */}
        <Menu inverted icon='labeled' attached='top' style={{
          background: '#37394D', borderBottom: '#191a23', borderRadius: '0', borderTop: '0'
        }}>
          <Menu.Item onClick={this.toggleVisibility} name='show' active={this.props.ui.showFilter} style={{ paddingTop: '25px' }}>
            <Icon name='content' size='huge' />
          </Menu.Item>
          <StyledLogo style={{ width: '197px', fontFamily: 'Arvo', fontSize: '20px', marginTop: '13px' , padding: '0px'}}>
            <img src='/images/logo.png' style={{width: '130px'}} />
          </StyledLogo>
          <Grid>
            <Grid.Column only='computer'>
          <Menu.Item active={true} name='Map' color='olive' style={{ boxShadow: 'inset 0 0 2px #222222' }}>
            <Icon name='map outline' />
            Карта
          </Menu.Item>
          </Grid.Column>
          </Grid>
          {/* <Menu.Item>
            <Icon name='hotel' />
            Hotels
          </Menu.Item>
          <Menu.Item>
            <Icon name='compass' />
            Guide
          </Menu.Item>
          <Menu.Item>
            <Icon name='cloud' />
            Weather
          </Menu.Item>
          <Menu.Item>
            <Icon name='plane' />
            Tickets
          </Menu.Item> */}
        </Menu> 
        {/* </Sidebar> */}
       <Sidebar.Pushable as={Segment} style={{ padding: 0, margin: 0, border: 0, borderRadius: 0, height: '100%', width: '100%', position: 'fixed' }}>
          <LeftSidebar />
          <Sidebar.Pusher>
              <Map />
              <Portal/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}