import React, { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Navbar from '../ui'
import { messages } from '../../helpers/calendar-messages-es'
import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('es')

const localizer = momentLocalizer(moment)

const myEventList = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
    notes: 'Comprar el pastel',
    user: { _id: '123', name: 'Chara-' },
  },
]

const CalendarView = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const onDoubleClick = (e) => {
    console.log(e)
  }
  const onSelectEvent = (e) => {
    console.log(e)
  }

  const onView = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.table(event, start, end, isSelected)

    const style = {
      backgroundColor: '#367cf7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: '#fff',
    }

    return { style }
  }

  return (
    <div>
      <Navbar />

      <div style={{ display: 'flex', alignItems: 'center', height: '90vh' }}>
        <BigCalendar
          localizer={localizer}
          events={myEventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, width: '100vw' }}
          messages={messages}
          eventPropGetter={eventStyleGetter}
          components={{ event: CalendarEvent }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onView}
          view={lastView}
        />

        <CalendarModal />
      </div>
    </div>
  )
}
export default CalendarView
