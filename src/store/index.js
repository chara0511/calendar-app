/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers/rootReducer'

// eslint-disable-next-line operator-linebreak
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
