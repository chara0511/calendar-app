import { types } from '../types'

const initialState = {
  checking: true,
  // uid: null,
  // name: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogged:
      return {
        ...state,
        ...action.payload,
        checking: false,
      }

    case types.authCheckingFinished:
      return {
        ...state,
        checking: false,
      }
    default:
      return state
  }
}
