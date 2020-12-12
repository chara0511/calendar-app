import { types } from '../types'

const initialState = { modalOpen: false }

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return { ...state, modalOpen: !state.modalOpen }

    default:
      return state
  }
}
