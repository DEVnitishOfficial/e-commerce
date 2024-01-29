import {legacy_createStore,applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {authReducer} from './auth/Reducer'
import customerProductReducer from './Customers/Product/Reducer'

const rootReducers = combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))