import moment from 'moment'
import { types } from '../types'

const initialState = {
  events: [
    {
      title: 'Cumpleaños del jefe',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      bgColor: '#fafafa',
      notes: 'Comprar el pastel',
      user: { _id: '123', name: 'Chara-' },
    },
  ],
  activeEvent: null,
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.calendarAddNewEvent:
      return {
        ...state,
        events: [action.payload, ...state.events],
      }

    case types.calendarActiveEvent:
      return {
        ...state,
        activeEvent: action.payload,
      }

    default:
      return state
  }
}
