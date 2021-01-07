import { types } from '../types'

const initialState = {
  checking: true,
  // uid: null,
  // name: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogged:
    case types.authRegistered:
      return {
        ...state,
        checking: false,
        ...action.payload,
      }

    default:
      return state
  }
}
