import { Reducer } from '../Reducer/reducer'
import {createStore} from 'redux'


export const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())