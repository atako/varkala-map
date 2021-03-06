import React from 'react'
import { Menu, Icon, Sidebar, Container, Grid } from 'semantic-ui-react'
import CheckBox from '../containers/checkboxes/checkbox'
import { showFilter } from '../actions'
import styled from 'styled-components'

const FilterItem = styled.div`
    background: ${props => props.active ? '#434C5E' : '#2E3440'};
    text-align: left;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: ${props => props.active ? `5px solid ${props.color};` : '5px solid #364050;'};
`

const MenuItems = [{
    en_title: 'Supermarkets',
    ru_title: 'Супермаркеты',
    borderColor: '#A3BE8C',
    backgroundColor: '#4D5B15',
    icon: 'shop',
    category: 'supermarkets'
},{
    en_title: 'Beaches',
    ru_title: 'Пляжи',
    borderColor: '#D08770',
    backgroundColor: '#510A2A',
    icon: 'umbrella',
    category: 'beaches'
},{
    en_title: 'Sights',
    ru_title: 'Места',
    borderColor: '#B38EAD',
    backgroundColor: '#082e68',
    icon: 'find',
    category: 'sights'
}]

export default class leftSidebar extends React.Component {
  
  toggleVisibility = () => this.props.dispatch(showFilter({ showFilter: this.props.ui.showFilter }))
  render() {
    const localPrefix = this.props.local.includes("ru") ? 'ru' : 'en' 
    return <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.ui.showFilter} icon='labeled' vertical style={{ background: '#2E3440', width: '280px', paddingTop: '30px', borderLeft: '0px' }} >

        <div style={{top: '30px', right: '-24px', position: 'absolute', zIndex: '999'}}></div>
        {MenuItems.map(item => {
          return <FilterItem key={item.category} active={this.props.appState[item.category]} color={item.borderColor} activeBackground={item.backgroundColor}>
            <Container>
              <Grid style={{ marginRight: '0px' }}>
                <Grid.Column width={12}>
                  <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                    <Icon inverted name={item.icon} size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                    {localPrefix === 'ru' ? item.ru_title : item.en_title }
                  </div>
                </Grid.Column>
                <Grid.Column width={2}>
                  <CheckBox category={item.category}/>
                </Grid.Column>
              </Grid>
            </Container>
          </FilterItem>
        })}
          {/* <FilterItem active={this.props.appState.supermarkets} color='#88a83e' activeBackground='#4D5B15'>
            <Container>
              <Grid style={{ marginRight: '0px' }}>
                <Grid.Column width={12}>
                  <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                    <Icon inverted name='shop' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                    Магазины
                  </div>
                </Grid.Column>
                <Grid.Column width={2}>
                  <SuperCheck />
                </Grid.Column>
              </Grid>
            </Container>
          </FilterItem>
          <FilterItem active={this.props.appState.beaches} color='#911146' activeBackground='#510A2A'>
            <Container>
              <Grid style={{ marginRight: '0px' }}>
                <Grid.Column width={12}>
                  <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                    <Icon inverted name='umbrella' size='big' style={{ marginTop: '-3px', marginRight: '10px', color: '#A0ABBE' }} />
                    Пляжи
                      </div>
                </Grid.Column>
                <Grid.Column width={2} >
                  <BeachCheck onClick={this.toggleVisibility} />
                </Grid.Column>
              </Grid>
            </Container>
          </FilterItem> */}
          {/* <FilterItem active={this.props.appState.atm} color='#FDD245' activeBackground='#59460e'>
            <Container>
              <Grid style={{ marginRight: '0px' }}>
                <Grid.Column width={12}>
                  <div className='title' style={{ color: '#A0ABBE', fontFamily: 'Open Sans', fontSize: '16px', marginLeft: '10px' }}>
                    <Icon inverted name='photo' size='big' style={{ marginTop: '-3px', color: '#A0ABBE' }} />
                    Посмотреть
                      </div>
                </Grid.Column>
                <Grid.Column width={2} >
                  <AtmCheck onClick={this.toggleVisibility} />
                </Grid.Column>
              </Grid>
            </Container>
          </FilterItem> */}
          </Sidebar>
  }
} 