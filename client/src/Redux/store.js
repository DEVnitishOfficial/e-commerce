import {legacy_createStore,applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {authReducer} from './auth/Reducer'
import customerProductReducer from './Customers/Product/Reducer'
import cartReducer from './Customers/Cart/Reducer'
import {orderReducer} from './Customers/Order/Reducer'

const rootReducers = combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))