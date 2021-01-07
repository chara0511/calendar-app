import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/authAction'

const Navbar = () => {
  const { name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <div className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">{name}</span>
      <button type="button" onClick={handleLogout} className="btn btn-outline-danger">
        <span>Salir</span>
      </button>
    </div>
  )
}
export default Navbar
