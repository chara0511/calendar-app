import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { startChecking } from '../../actions/authAction'
import LoginView from '../auth'
import CalendarView from '../calendar'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const dispatch = useDispatch()

  const { checking, uid } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if (checking) {
    return <h1>Loading</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/auth" component={LoginView} isLogged={!!uid} />
          <PrivateRoute exact path="/" component={CalendarView} isLogged={!!uid} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
