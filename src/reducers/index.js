import cartItems from './cartItems';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  cart: cartItems,
});
export default reducers;
