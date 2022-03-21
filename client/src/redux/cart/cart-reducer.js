import { addCartItem, removeCartItem, setCartItems } from "./cart.utils";
import CartTypes from "./cart-types";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartTypes.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };

    case CartTypes.DELETE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };

    case CartTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    case CartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
