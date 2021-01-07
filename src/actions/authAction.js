import Swal from 'sweetalert2'
import { fetchAuthWithoutToken, fetchAuthWithToken } from '../helpers/fetchAuth'
import { types } from '../types'

const logged = (user) => ({
  type: types.authLogged,
  payload: user,
})

export const startLogin = (email, password) => async (dispatch) => {
  const res = await fetchAuthWithoutToken('auth', { email, password }, 'POST')
  const body = await res.json()

  if (body.ok) {
    localStorage.setItem('token', body.token)
    localStorage.setItem('token-init-date', new Date().getTime())

    dispatch(
      logged({
        uid: body.uid,
        name: body.name,
      }),
    )
  } else {
    Swal.fire('Error', body.msg, 'error')
  }
}
export const startRegister = (name, email, password) => async (dispatch) => {
  const res = await fetchAuthWithoutToken('auth/new', { name, email, password }, 'POST')
  const body = await res.json()

  if (body.ok) {
    dispatch(logged({ uid: body.uid, name: body.name }))
  } else {
    Swal.fire('Error', body.msg, 'error')
  }
}

const checkingFinished = () => ({ type: types.authCheckingFinished })

export const startChecking = () => async (dispatch) => {
  const res = await fetchAuthWithToken('auth/refresh')
  const body = await res.json()

  if (body.ok) {
    dispatch(logged({ uid: body.uid, name: body.name }))
  } else {
    dispatch(checkingFinished())
  }
}

const logout = () => ({ type: types.authLogout })

export const startLogout = () => (dispatch) => {
  localStorage.clear()
  dispatch(logout())
}
