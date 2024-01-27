import {legacy_createStore,applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {authReducer} from './auth/Reducer'

const rootReducers = combineReducers({

    auth:authReducer
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))