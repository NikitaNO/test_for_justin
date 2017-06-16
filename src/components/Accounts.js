import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../redux/modules/accounts'

@connect(
  ({ accounts }) => ({ accounts: accounts.accounts }),
  {
    addAccount
  }
)
export default class Account extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newAccountValue: ''
    }
  }

  handleInputChange = e => e.target.value && this.setState({ newAccountValue: e.target.value })

  addAccount = () => {
    this.props.addAccount(+this.state.newAccountValue)
    this.setState({ newAccountValue: '' })
  }

  render() {
    const { accounts } = this.props;
    const { newAccountValue } = this.state;

    return (
      <div className="wrap__nav">
        <h3>Accounts</h3>
        <label>Count</label> <span>{accounts.length}</span>
        <br/>
        <label htmlFor="account">Balance: </label>
        <input type="number" name="account" value={newAccountValue} onChange={this.handleInputChange}/>
        <button type="button" onClick={this.addAccount}>Submit</button>
        <hr/>
        {
          accounts.map((a, i) =>
            <div key={i}>
              <span>Balance: </span><span>{a}</span>
            </div>
          )
        }
      </div>
    )
  }
}