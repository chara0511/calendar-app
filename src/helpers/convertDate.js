/* eslint-disable implicit-arrow-linebreak */
import moment from 'moment'

export const convertDate = (calendarEvents = []) =>
  calendarEvents.map((e) => ({
    ...e,
    end: moment(e.end).toDate(),
    start: moment(e.start).toDate(),
  }))
