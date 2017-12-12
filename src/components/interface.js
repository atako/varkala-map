import React from 'react'
import Map from '../containers/map'
import BeachCheck from '../containers/checkboxes/beach'
import AtmCheck from './checkboxes/atm'
import SuperCheck from '../containers/checkboxes/supermarket'
import Portal from '../containers/portal'
import { showFilter, showPortal } from '../actions'
import { Menu, Icon, Sidebar, Segment, Container, Grid, Checkbox } from 'semantic-ui-react'

export default class Interface extends React.Component {

  toggleVisibility = () => this.props.dispatch(showFilter({ showFilter: this.props.ui.showFilter }))
  togglePortal = () => this.props.dispatch(showPortal({ showPortal: this.props.ui.showPortal }))

  render() {
    return (
      <div>
        <Menu inverted icon='labeled' attached='top' style={{
          background: '#37394D', borderBottom: '#191a23', borderRadius: '0', borderTop: '0'
        }}>
          <Menu.Item onClick={this.toggleVisibility} name='show' active={this.props.ui.showFilter} style={{ paddingTop: '25px' }}>
            <Icon name='content' size='huge' />
          </Menu.Item>
          <Menu.Item style={{ width: '197px', fontFamily: 'Arvo', fontSize: '20px', marginTop: '10px' }}>
            Varkala.Online
          </Menu.Item>
          <Menu.Item active={true} name='Map' color='olive' style={{ boxShadow: 'inset 0 0 2px #222222' }}>
            <Icon name='map outline' />
            Map
          </Menu.Item>
          <Menu.Item>
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
          </Menu.Item>
          <Menu.Item>
            <Checkbox toggle checked={this.props.ui.showPortal} onClick={this.togglePortal} />
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
        <Sidebar.Pushable as={Segment} style={{ padding: 0, margin: 0, border: 0, borderRadius: 0, }}>
          <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.ui.showFilter} icon='labeled' vertical style={{ background: '#354051', width: '280px', paddingTop: '30px' }} >
            <Menu.Item name='updates' style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
              <Container>
                <Grid>
                  <Grid.Column width={12}>
                    <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                      <Icon inverted name='shop' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                      Supermarkets
                </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <SuperCheck />
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
                    <BeachCheck onClick={this.toggleVisibility} />
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
                    <AtmCheck />
                  </Grid.Column>
                </Grid>
              </Container>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic style={{ padding: 0, margin: 0 }}>
              <Map />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Portal/>
      </div>
    )
  }
}