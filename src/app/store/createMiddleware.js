import { applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

export const middleware = applyMiddleware(promiseMiddleware)
