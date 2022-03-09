import { addCartItem, removeCartItem, setCartItems } from "./cart.utils";

const initialState = {
   hidden: true,
   cartItems: [],
};

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case "TOGGLE_CART_HIDDEN":
         return {
            ...state,
            hidden: !state.hidden,
         };

      case "ADD_ITEMS_TO_CART":
         return {
            ...state,
            cartItems: addCartItem(state.cartItems, action.payload),
         };

      case "DELETE_ITEMS_FROM_CART":
         return {
            ...state,
            cartItems: removeCartItem(state.cartItems, action.payload),
         };

      case "SET_CART_ITEMS":
         return {
            ...state,
            cartItems: action.payload,
         };

      default:
         return state;
   }
};

export default cartReducer;
