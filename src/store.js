import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/todo'
import thunk from './reducers/todo'
export default createStore(
  reducer,
  applyMiddleware(thunk)
  )