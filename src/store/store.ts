import { createStore } from 'redux'
import  cartReducer from './reducer';
const store = createStore(cartReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

export default store;
// Dispatching Action
//store.dispatch({type: 'ADD_TO_CART', payload: { product : Product }});
//store.dispatch({type: 'REMOVE_FROM_CART', payload: { product : }});
//console.log(store.getState());
