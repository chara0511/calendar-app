import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker'
import Swal from 'sweetalert2'
import { uiHandleModal } from '../../actions/uiAction'
import {
  calendarActiveEventUpdated,
  calendarAddNewEvent,
  calendarClearActiveEvent,
} from '../../actions/calendarAction'
import './CalendarModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nowPlusOneHour = now.clone().add(1, 'hours')
const initialFormValues = {
  title: '',
  notes: '',
  start: null,
  end: null,
}

const CalendarModal = () => {
  const [startDate, setStartDate] = useState(now.toDate())
  const [endDate, setEndDate] = useState(nowPlusOneHour.toDate())
  const [isValid, setIsValid] = useState(true)
  const [formValues, setFormValues] = useState(initialFormValues)

  const { modal } = useSelector((state) => state.ui)
  const { activeEvent } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  useEffect(() => {
    if (activeEvent) {
      setStartDate(activeEvent.start)
      setEndDate(activeEvent.end)
      setFormValues(activeEvent)
    }
  }, [activeEvent])

  const { title, notes, start, end } = formValues

  const closeModal = () => {
    setFormValues(initialFormValues)
    setStartDate(now.toDate())
    setEndDate(nowPlusOneHour.toDate())
    dispatch(calendarClearActiveEvent())
    dispatch(uiHandleModal())
  }

  const handleInputChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value })
  }

  const handleStartDateChange = (e) => {
    setStartDate(e)
    setFormValues({ ...formValues, start: e })
  }

  const handleEndDateChange = (e) => {
    setEndDate(e)
    setFormValues({ ...formValues, end: e })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const momentStart = moment(start)
    const momentEnd = moment(end)

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'La fecha de finalización debe ser mayor a la fecha de inicio.',
        'error',
      )
    }

    if (title.trim().length < 2) {
      return setIsValid(false)
    }

    if (activeEvent) {
      dispatch(calendarActiveEventUpdated(formValues))
    } else {
      dispatch(
        calendarAddNewEvent({
          ...formValues,
          id: new Date().getTime(),
          user: { _id: '123', name: 'Fer-' },
        }),
      )
    }

    setIsValid(true)

    return closeModal()
  }

  return (
    <Modal
      isOpen={modal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={300}
    >
      <h1> Nuevo evento </h1>

      <hr />

      <form className="container px-4" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <DateTimePicker
            className="form-control border-none"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="form-group">
          <DateTimePicker
            className="form-control border-none"
            value={endDate}
            minDate={startDate}
            onChange={handleEndDateChange}
          />
        </div>

        <hr />

        <div className="form-group">
          <label htmlFor="title" className="form-control">
            <input
              id="title"
              type="text"
              className={`form-control ${!isValid && 'is-invalid'}`}
              placeholder="Título del evento"
              name="title"
              value={title}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </label>
        </div>

        <hr />

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="4"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block my-3 mx-auto d-block">
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}

export default CalendarModal
