import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AppRouter from './components/router'

const CalendarApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default CalendarApp
