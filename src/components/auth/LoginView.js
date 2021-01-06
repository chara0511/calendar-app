import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/authAction'
import { useForm } from '../../hooks/useForm'
import './login.css'

const LoginView = () => {
  const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'chara@gmail.com',
    loginPassword: 'bcde1',
  })

  const dispatch = useDispatch()

  const { loginEmail, loginPassword } = formLoginValues

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(startLogin(loginEmail, loginPassword))
  }

  return (
    <div className="container login-container">
      <div className="row w-full">
        <div className="col-md-6 login-form-1 my-3">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
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
          <form>
            <div className="form-group">
              <input type="text" className="form-control mb-3" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control mb-3" placeholder="Correo" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control mb-3" placeholder="Contraseña" />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Repita la contraseña"
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginView
