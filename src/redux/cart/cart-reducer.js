import filtercart from "./cart.utils";
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
            cartItems: filtercart(state.cartItems, action.payload),
         };

      default:
         return state;
   }
};

export default cartReducer;
