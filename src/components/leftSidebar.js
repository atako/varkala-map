import React from 'react'
import { Menu, Icon, Sidebar, Container, Grid } from 'semantic-ui-react'
import BeachCheck from '../containers/checkboxes/beach'
import AtmCheck from './checkboxes/atm'
import SuperCheck from '../containers/checkboxes/supermarket'
import { showFilter } from '../actions'
import styled from 'styled-components'

const FilterItem = styled.div`
    background: ${props => props.active ? props.activeBackground : '#364050'};
    text-align: left;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: ${props => props.active ? `5px solid ${props.color};` : '5px solid #364050;'}
    box-shadow: 'inset 0 0 2px #222222';
`

export default class leftSidebar extends React.Component {
  
  toggleVisibility = () => this.props.dispatch(showFilter({ showFilter: this.props.ui.showFilter }))
  render() {
        return <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.ui.showFilter} icon='labeled' vertical style={{ background: '#354051', width: '280px', paddingTop: '30px', borderLeft: '0px' }} >
          <FilterItem active={this.props.appState.supermarkets} color='#A4459A' activeBackground='#60405d'>
            <Container >
              <Grid style={{ marginRight: '0px' }}>
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
          </FilterItem>
          <FilterItem active={this.props.appState.beaches} color='#FDD245' activeBackground='#59460e'>
            <Container>
              <Grid style={{ marginRight: '0px' }}>
                <Grid.Column width={12}>
                  <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                    <Icon inverted name='umbrella' size='big' style={{ marginTop: '-3px', color: '#A0ABBE' }} />
                    Beaches
                      </div>
                </Grid.Column>
                <Grid.Column width={2} >
                  <BeachCheck onClick={this.toggleVisibility} />
                </Grid.Column>
              </Grid>
            </Container>
          </FilterItem>
              <Menu.Item name='updates' style={{ textAlign: 'left', paddingTop: '8px', paddingBottom: '8px' }}>
                <Container>
              <Grid style={{ marginRight: '0px' }}>
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