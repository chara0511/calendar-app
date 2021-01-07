import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './components/router/AppRouter'
import { store } from './store'

const CalendarApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default CalendarApp
