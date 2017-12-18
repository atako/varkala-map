import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { set, reduce } from 'lodash'
import * as actions from '../actions'

const ui = handleActions({
  [actions.showFilter](state, { payload: showFilter }) {
    return { ...state, showFilter: !showFilter.showFilter}
  },
  [actions.fetchInfoRequest](state) {
    return { ...state, showPortal: true }
  },
  [actions.closePortal](state, { payload: showPortal}) {
    return { ...state, showPortal: false }
  } 
}, { showFilter: true, showPortal: false })

const objects = handleActions({
  [actions.fetchPointsSuccess](state, { payload: info }) {
    console.log(info)
    return info.info
  },
  [actions.fetchPointsFailure](state) {
    console.log('Cannot get points')
    return []
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
 [])

const appState = handleActions({
  [actions.changeFilter](state, { payload: checkboxState}) {
    return {...state, [checkboxState.category]: checkboxState.state }
  }
}, { supermarkets: true, beaches: true, atm: false })

const portal = handleActions({
  [actions.fetchInfoSuccess](state, { payload }) {
    return payload.info
  },
  [actions.fetchInfoFailure](state, {payload} ) {
    return { title: 'error', description: 'error'}
  }
}, {})

const portalState = handleActions({
  [actions.fetchInfoRequest]() {
    return 'requested'
  },
  [actions.fetchInfoFailure]() {
    return 'failed'
  },
  [actions.fetchInfoSuccess]() {
    return 'successed'
  }
}, 'none')

export default combineReducers({
  ui,
  objects,
  appState,
  portal,
  portalState
})