import React, { Component } from 'react'
import { Accounts, Chart } from '../components'
import '../styles/main.css'

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="wrap">
        <Accounts />
        <Chart />
      </div>
    )
  }
}