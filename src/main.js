import React from 'react'
import { render as renderComponent } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers  from './redux/modules'

const store = createStore(reducers)

import {
  App
} from './components'

renderComponent(
  <Provider store={store} key="provider">
    <App/>
  </Provider>,
  document.getElementById('app')
)
