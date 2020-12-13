import moment from 'moment'
import { types } from '../types'

const initialState = {
  events: [
    {
      id: new Date().getTime(),
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

    case types.calendarClearActiveEvent:
      return {
        ...state,
        activeEvent: initialState.activeEvent,
      }

    case types.calendarActiveEventUpdated:
      return {
        ...state,
        events: state.events.map((e) => (e.id === action.payload.id ? action.payload : e)),
      }

    case types.calendarActiveEventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: initialState.activeEvent,
      }

    default:
      return state
  }
}
