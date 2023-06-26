import {  legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import reducers from '@redux/reducers'


const store = createStore<any, any, any, any>(
    reducers,
    applyMiddleware(thunk)
);

export default store;