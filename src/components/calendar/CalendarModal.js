import React, { useState } from 'react'
import Modal from 'react-modal'

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

const CalendarModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={300}
    >
      <div>Hola mundo</div>
      <p>asdasdas</p>
    </Modal>
  )
}

export default CalendarModal
