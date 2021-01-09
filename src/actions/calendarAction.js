/* eslint-disable no-param-reassign */
import { convertDate } from '../helpers/convertDate'
import { fetchAuthWithToken } from '../helpers/fetchAuth'
import { types } from '../types'

const calendarAddNewEvent = (event) => ({ type: types.calendarAddNewEvent, payload: event })

export const calendarStartAddNewEvent = (calendarEvent) => async (dispatch, getState) => {
  const { uid, name } = getState().auth
  try {
    const res = await fetchAuthWithToken('calendar', calendarEvent, 'POST')
    const body = await res.json()

    if (body.ok) {
      calendarEvent.id = body.calendarEvent._id
      calendarEvent.user = { _id: uid, name }

      dispatch(calendarAddNewEvent(calendarEvent))
    }
  } catch (error) {
    console.log(error)
  }
}

const calendarEventsLoaded = (calendarEvents) => ({
  type: types.calendarEventsLoaded,
  payload: calendarEvents,
})

export const calendarStartEventsLoading = () => async (dispatch) => {
  try {
    const res = await fetchAuthWithToken('calendar')
    const body = await res.json()

    const calendarEvents = convertDate(body.calendarEvents)

    dispatch(calendarEventsLoaded(calendarEvents))
  } catch (error) {
    console.log(error)
  }
}
export const calendarActiveEvent = (event) => ({ type: types.calendarActiveEvent, payload: event })
export const calendarClearActiveEvent = () => ({ type: types.calendarClearActiveEvent })
export const calendarActiveEventUpdated = (event) => ({
  type: types.calendarActiveEventUpdated,
  payload: event,
})
export const calendarActiveEventDeleted = () => ({ type: types.calendarActiveEventDeleted })
