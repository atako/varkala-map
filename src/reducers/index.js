import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { set, reduce, find } from 'lodash'
import * as actions from '../actions'

const ui = handleActions({
  [actions.showFilter](state, { payload: showFilter }) {
    return { ...state, showFilter: !showFilter.showFilter}
  },
  [actions.showPortal](state, { payload: showPortal }) {
    return { ...state, showPortal: true }
  },
  [actions.closePortal](state, { payload: showPortal}) {
    return { ...state, showPortal: false }
  } 
}, { showFilter: true, showPortal: false })

const objects = handleActions({
  [actions.getObjects](state, { payload: objects}) {
    return state
  },
  [actions.changeFilter](state, { payload: category}) {
    const result = reduce(state, (result, value, key) => {
      value.category === category.category ? result.push(set(value, 'visible', category.state)) : result.push(value)
      return result
    }, [])
    return result
  },
  [actions.showInfoWindow](state, { payload: id}) {
    const result = reduce(state, (result, value, key) => {
      value.id === id.id ? result.push(set(value, 'infoWindow', !value.infoWindow)) : result.push(value)
      return result
    }, [])
    return result
  }
},
 [
    { id: 1, lat: 8.737457, lng: 76.708158, color: '#A6419C', category: 'supermarkets', title: 'Krishna market', visible: true, infoWindow: false },
    { id: 2, lat: 8.751191, lng: 76.701988, color: '#A6419C', category: 'supermarkets', title: 'Edava market', visible: true, infoWindow: false },
    { id: 3, lat: 8.736603, lng: 76.724954, color: '#A6419C', category: 'supermarkets', title: 'Auditorium supermarket', visible: true, infoWindow: false },
    { id: 4, lat: 8.735684, lng: 76.703193, color: '#FED332', category: 'beaches', title: 'Varkala beach', visible: true, infoWindow: false },
    { id: 5, lat: 8.732667, lng: 76.706101, color: '#FED332', category: 'beaches', title: 'Papanasam beach', visible: true, infoWindow: false },
    { id: 6, lat: 8.744381, lng: 76.697722, color: '#FED332', category: 'beaches', title: 'Black beach', visible: true, infoWindow: false },
   ])

const appState = handleActions({
  [actions.changeFilter](state, { payload: checkboxState}) {
    return {...state, [checkboxState.category]: checkboxState.state }
  }
}, { supermarkets: true, beaches: true, atm: false })

const portal = handleActions({
  [actions.fetchInfoSuccess](state, { payload }) {
    // console.log(payload.info)
    return payload.info
  },
  [actions.fetchInfoFailure](state, {payload} ) {
    return { title: 'error', description: 'error'}
  }
}, {})

export default combineReducers({
  ui, objects, appState, portal
})