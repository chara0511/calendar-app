import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/auth" />)}
  />
)

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PrivateRoute
