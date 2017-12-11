import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './components/App'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
  reducers,
  reduxDevtools && reduxDevtools(),
);

render( <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
