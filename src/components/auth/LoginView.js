import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startLogin, startRegister } from '../../actions/authAction'
import { useForm } from '../../hooks/useForm'
import './login.css'

const LoginView = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'chara@gmail.com',
    loginPassword: 'bcde1',
  })

  const [formSignupValues, handleSignupInputChange] = useForm({
    signupName: 'carlos',
    signupEmail: 'carlos@gmail.com',
    signupPassword: 'bcde1',
    signupRepeatPassword: 'bcde1',
  })
  const dispatch = useDispatch()

  const { loginEmail, loginPassword } = formLoginValues
  const { signupName, signupEmail, signupPassword, signupRepeatPassword } = formSignupValues

  const handleLogin = (e) => {
    e.preventDefault()

    return dispatch(startLogin(loginEmail, loginPassword))
  }

  const handleSignup = (e) => {
    e.preventDefault()

    if (signupPassword !== signupRepeatPassword) {
      return Swal.fire('Error', "password don't match", 'error')
    }

    return dispatch(startRegister(signupName, signupEmail, signupPassword))
  }

  return (
    <div className="container login-container">
      <div className="row w-full">
        <div className="col-md-6 login-form-1 my-3">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Email"
                name="loginEmail"
                value={loginEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2 my-3">
          <h3>Signup</h3>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="signupName"
                value={signupName}
                onChange={handleSignupInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="signupEmail"
                value={signupEmail}
                onChange={handleSignupInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="signupPassword"
                value={signupPassword}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Repeat password"
                name="signupRepeatPassword"
                value={signupRepeatPassword}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginView
