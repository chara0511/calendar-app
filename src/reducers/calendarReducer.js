import { types } from '../types'

// {
//    id: new Date().getTime(),
//    title: 'Cumpleaños del jefe',
//    start: moment().toDate(),
//    end: moment().add(2, 'hours').toDate(),
//    notes: 'Comprar el pastel',
//    user: { _id: '123', name: 'Chara-' },
// },

const initialState = {
  events: [],
  activeEvent: null,
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.calendarEventsLoaded:
      return {
        ...state,
        events: [...action.payload],
      }

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

    case types.calendarEventUpdated:
      return {
        ...state,
        events: state.events.map((e) => (e._id === action.payload._id ? action.payload : e)),
      }

    case types.calendarEventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e._id !== state.activeEvent._id),
        activeEvent: initialState.activeEvent,
      }

    case types.calendarEventLogout:
      return { ...initialState }

    default:
      return state
  }
}
