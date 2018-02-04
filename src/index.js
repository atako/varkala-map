import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import LocalizedStrings from 'react-localization'
import reducers from './reducers'
import App from './components/App'
import { fetchPoints, setInterfaceLocal } from './actions/index';

const devtoolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  ),
)

store.dispatch(fetchPoints())
const local = new LocalizedStrings({
  en: {
  },
  ru: {
  }
})
store.dispatch(setInterfaceLocal(local.getInterfaceLanguage()))

render( <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app'));
