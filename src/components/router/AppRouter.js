import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import LoginView from '../auth'
import CalendarView from '../calendar'

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={CalendarView} />
        <Route exact path="/auth" component={LoginView} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
