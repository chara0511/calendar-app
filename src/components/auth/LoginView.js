import React from 'react'
import './login.css'

const LoginView = () => (
  <div className="container login-container">
    <div className="row w-full">
      <div className="col-md-6 login-form-1 my-3">
        <h3>Ingreso</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control mb-3" placeholder="Correo" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control mb-3" placeholder="Contraseña" />
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </form>
      </div>

      <div className="col-md-6 login-form-2 my-3">
        <h3>Registro</h3>
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

export default LoginView
