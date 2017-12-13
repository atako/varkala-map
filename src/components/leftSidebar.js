import React from 'react'
import { Menu, Icon, Sidebar, Segment, Container, Grid, Checkbox } from 'semantic-ui-react'
import BeachCheck from '../containers/checkboxes/beach'
import AtmCheck from './checkboxes/atm'
import SuperCheck from '../containers/checkboxes/supermarket'
import { showFilter, showPortal } from '../actions'
export default class leftSidebar extends React.Component {

  toggleVisibility = () => this.props.dispatch(showFilter({ showFilter: this.props.ui.showFilter }))

  render() {
        return <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.ui.showFilter} icon='labeled' vertical style={{ background: '#354051', width: '280px', paddingTop: '30px' }} >
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
  }
} 