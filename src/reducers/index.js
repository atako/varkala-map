import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const ui = handleActions({
  [actions.showFilter](state, { payload: showFilter }) {
    return { ...state, showFilter: !showFilter}
  }
}, { showFilter: true, showPortal: false })

export default combineReducers({
  ui
})