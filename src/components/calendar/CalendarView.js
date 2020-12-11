import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Navbar from '../ui'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const myEventList = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
  },
]

const CalendarView = () => (
  <div>
    <Navbar />

    <div style={{ display: 'flex', alignItems: 'center', height: '90vh' }}>
      <BigCalendar
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: '100vw' }}
      />
    </div>
  </div>
)
export default CalendarView
