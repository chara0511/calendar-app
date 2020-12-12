import React, { useState } from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker'
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

const CalendarModal = () => {
  const [startDate, setStartDate] = useState(now.toDate())
  const [endDate, setEndDate] = useState(nowPlusOneHour.toDate())

  const closeModal = () => {
    // setIsOpen((prev) => !prev)
  }

  const handleStartDateChange = (e) => {
    setStartDate(e)
  }

  const handleEndDateChange = (e) => {
    setEndDate(e)
  }

  return (
    <Modal
      isOpen
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={300}
    >
      <h1> Nuevo evento </h1>

      <hr />

      <form className="container px-4">
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
              className="form-control"
              placeholder="Título del evento"
              name="title"
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
