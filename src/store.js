import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartItems from './reducers/cartItems';

const middleware = [thunk];
const initialState = {};
export default createStore(cartItems,initialState,applyMiddleware(...middleware))