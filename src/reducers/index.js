import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
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
  [actions.showInfoWindow](state, { payload }) {
    const result = reduce(state, (result, value, key) => {
      value.id === payload.id ? result.push(set(value, 'infoWindow', payload.state)) : result.push(value)
      return result
    }, [])
    return result
  },
  [actions.closePortal](state, {}) {
    const result = reduce(state, (result, value, key) => {
      value.infoWindow === true ? result.push(set(value, 'infoWindow', false)) : result.push(value)
      return result
    }, [])
    return result
  },
  [actions.fetchInfoLocal](state, {}) {
    const result = reduce(state, (result, value, key) => {
      value.infoWindow === true ? result.push(set(value, 'infoWindow', false)) : result.push(value)
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
}, { supermarkets: true, beaches: true, sights: true })

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

const currentPoint = handleActions({
  [actions.fetchInfoLocal] (state, {payload}) {
    return payload
  }
}, {})

const activeIcon = handleActions({
  [actions.fetchInfoLocal](state, {payload}) {
    return payload.id
  },
  [actions.closePortal](state, {}) {
    return null
  }
}, null)

const local = handleActions({
  [actions.setInterfaceLocal](state, {payload}) {
    return payload
  }
}, 'en-GB')

export default combineReducers({
  ui,
  objects,
  appState,
  portal,
  portalState,
  currentPoint,
  activeIcon,
  local
})