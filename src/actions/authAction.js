import { fetchAuthWithoutToken } from '../helpers/fetchAuth'
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
  }
}
