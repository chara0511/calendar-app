import React, { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { uiHandleModal } from '../../actions/uiAction'
import { calendarActiveEvent } from '../../actions/calendarAction'
import { AddNewFABtn, NavBar } from '../ui'
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
  const dispatch = useDispatch()

  const onDoubleClick = () => {
    dispatch(uiHandleModal())
  }

  const onSelectEvent = (e) => {
    dispatch(calendarActiveEvent(e))
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
      <NavBar />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '90vh',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <BigCalendar
          localizer={localizer}
          events={myEventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, width: '100vw', maxWidth: '1100px' }}
          messages={messages}
          eventPropGetter={eventStyleGetter}
          components={{ event: CalendarEvent }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onView}
          view={lastView}
        />

        <CalendarModal />

        <AddNewFABtn />
      </div>
    </div>
  )
}
export default CalendarView
