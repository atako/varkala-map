import { createAction } from 'redux-actions'

export const showFilter = createAction('FILTER_SHOW')
export const showPortal = createAction('PORTAL_SHOW')
export const getObjects = createAction('OBJECTS_GET')
export const changeFilter = createAction('FILTER_CHANGE')