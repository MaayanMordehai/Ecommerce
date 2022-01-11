import { createStore, Action } from 'redux'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import  cartReducer from './reducer';



const store = createStore(cartReducer);
  
export default store;