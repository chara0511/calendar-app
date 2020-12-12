import React from 'react'
import { useDispatch } from 'react-redux'
import { uiHandleModal } from '../../actions/uiAction'

const AddNewFABtn = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(uiHandleModal())
      }}
      className="btn btn-primary fab-btn my-3"
    >
      Add
    </button>
  )
}

export default AddNewFABtn
