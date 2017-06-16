'use strict'

import React from 'react'
import { render as renderComponent } from 'react-dom'

import {
  App
} from './components'

renderComponent(
  <App/>,
  document.getElementById('app')
)
