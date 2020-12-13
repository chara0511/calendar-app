import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

const FABtn = ({ name, handleFunction }) => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(handleFunction())
      }}
      className={`btn btn-primary fab-btn m-4 position-absolute bottom-0 ${
        name === 'Add' ? 'btn-primary end-0' : 'btn-danger start-0'
      }`}
    >
      {name}
    </button>
  )
}

FABtn.propTypes = {
  name: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
}

export default FABtn
