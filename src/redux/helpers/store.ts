import { createStore } from 'redux';
import cartReducer from '../reducers/cart.reducer'

const configureStore = () => {
    return createStore(
        cartReducer
    );
};

export default configureStore;