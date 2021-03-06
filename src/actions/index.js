import axios from 'axios'
import { createAction } from 'redux-actions'

export const showFilter = createAction('FILTER_SHOW')
export const showPortal = createAction('PORTAL_SHOW')
export const closePortal = createAction('CLOSE_PORTAL')
export const getObjects = createAction('OBJECTS_GET')
export const changeFilter = createAction('FILTER_CHANGE')
export const showInfoWindow = createAction('INFOWINDOW_SHOW')

export const fetchInfoRequest = createAction('INFO_FETCH_REQUEST')
export const fetchInfoSuccess = createAction('INFO_FETCH_SUCCESS')
export const fetchInfoFailure = createAction('INFO_FETCH_FAILURE')
export const fetchInfoLocal = createAction('INFO_FETCH_LOCAL')

export const fetchInfo = (item) => async (dispatch) => {
  dispatch(fetchInfoLocal(item))
  dispatch(fetchInfoRequest());
  try {
    const url = `https://varkala-map-1512622053521.firebaseio.com/descriptions/${item.id}.json`
    const response = await axios.get(url)
    if (response.data === null) {
      dispatch(fetchInfoFailure())
    } else {
      // console.log(response.data)
      dispatch(fetchInfoSuccess({ info: response.data }))
    }
  } catch (e) {
    dispatch(fetchInfoFailure())
  }
}

export const fetchPointsRequest = createAction('POINTS_FETCH_REQUEST')
export const fetchPointsSuccess = createAction('POINTS_FETCH_SUCCESS')
export const fetchPointsFailure = createAction('POINTS_FETCH_FAILURE')

export const fetchPoints = (id) => async (dispatch) => {
  dispatch(fetchPointsRequest());
  try {
    const url = `https://varkala-map-1512622053521.firebaseio.com/points.json`
    const response = await axios.get(url)
    if (response.data === null) {
      dispatch(fetchInfoFailure())
    } else {
      dispatch(fetchPointsSuccess({ info: Object.values(response.data) }))
    }
  } catch (e) {
    dispatch(fetchPointsFailure())
  }
}

export const setActivePoint = createAction('POINT_SET_ACTIVE')

export const setInterfaceLocal = createAction('INTERFACE_SET_LANGUAGE')