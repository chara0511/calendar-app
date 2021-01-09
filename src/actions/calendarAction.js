/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2'
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
      calendarEvent._id = body.calendarEvent._id
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

const calendarEventUpdated = (calendarEvent) => ({
  type: types.calendarEventUpdated,
  payload: calendarEvent,
})

export const calendarStartEventUpdate = (calendarEvent) => async (dispatch) => {
  try {
    const res = await fetchAuthWithToken(`calendar/${calendarEvent._id}`, calendarEvent, 'PUT')
    const body = await res.json()
    if (body.ok) {
      dispatch(calendarEventUpdated(calendarEvent))
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  } catch (error) {
    console.log(error)
  }
}

const calendarEventDeleted = () => ({ type: types.calendarEventDeleted })

export const calendarStartEventDelete = () => async (dispatch, getState) => {
  const { _id } = getState().calendar.activeEvent
  console.log(_id)
  try {
    const res = await fetchAuthWithToken(`calendar/${_id}`, {}, 'DELETE')
    const body = await res.json()

    if (body.ok) {
      dispatch(calendarEventDeleted())
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  } catch (error) {
    console.log(error)
  }
}

export const calendarEventLogout = () => ({ type: types.calendarEventLogout })
