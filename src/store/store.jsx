import { combineReducers,createStore } from 'redux';
import TodoReducer from './reducers/TodoReducer';
import CountReducer from './reducers/CountReducer';
const Reducers = combineReducers({c:CountReducer,t:TodoReducer})
const store = new createStore(Reducers)
export default store;