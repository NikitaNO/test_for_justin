const ADD_ACCOUNT = 'ADD_ACCOUNT'
const SET_MONTHLY = 'SET_MONTHLY'

const initialState = {
  accounts: [],
  monthly: 0
}
export default function accounts(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.concat([action.balance])
      }
    case SET_MONTHLY:
      return {
        ...state,
        monthly: action.monthly
      }
    default:
      return state
  }
}

export function addAccount(balance) {
  return { type: ADD_ACCOUNT, balance }
}

export function setMonthly(monthly) {
  return { type: SET_MONTHLY, monthly }
}