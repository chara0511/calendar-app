import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (isLogged ? <Redirect to="/" /> : <Component {...props} />)}
  />
)

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PublicRoute
