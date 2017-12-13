import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
import { set, reduce} from 'lodash'
import * as actions from '../actions'

const ui = handleActions({
  [actions.showFilter](state, { payload: showFilter }) {
    return { ...state, showFilter: !showFilter.showFilter}
  },
  [actions.showPortal](state, { payload: showPortal }) {
    return { ...state, showPortal: !showPortal.showPortal }
  }, 
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
  }
},
 [
    { lat: 8.737457, lng: 76.708158, color: '#A6419C', category: 'supermarkets', visible: true },
    { lat: 8.751191, lng: 76.701988, color: '#A6419C', category: 'supermarkets', visible: true },
    { lat: 8.736603, lng: 76.724954, color: '#A6419C', category: 'supermarkets', visible: true },
    { lat: 8.735684, lng: 76.703193, color: '#FED332', category: 'beaches', visible: true },
    { lat: 8.732667, lng: 76.706101, color: '#FED332', category: 'beaches', visible: true },
    { lat: 8.744381, lng: 76.697722, color: '#FED332', category: 'beaches', visible: true },
   ])

const appState = handleActions({
  [actions.changeFilter](state, { payload: checkboxState}) {
    return {...state, [checkboxState.category]: checkboxState.state }
  }
}, { supermarkets: true, beaches: true, atm: false })

export default combineReducers({
  ui, objects, appState
})