import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import AppReducer from './reducers/RootReducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        AppReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}
