import { types } from '../types'

const initialState = { modal: false }

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiHandleModal:
      return { ...state, modal: !state.modal }

    default:
      return state
  }
}
