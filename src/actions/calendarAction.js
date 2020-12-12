import { types } from '../types'

export const calendarAddNewEvent = (event) => ({ type: types.calendarAddNewEvent, payload: event })

export const calendarActiveEvent = (event) => ({ type: types.calendarActiveEvent, payload: event })
