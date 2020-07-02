const {State} = require('react-native-gesture-handler');
const {ADD_TO_CART, REMOVE_FROM_CART} = require('../actions/types');

const initialState = {
  cart: [],
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem, index) => index !== action.payload.index,
        ),
      };
    default:
      return state;
  }
};
export default cartItems;
