import { createSelector } from "reselect";

//input Selector(Doesnt use Create Selector)
const selectCart = (state) => state.cart;

//output Selector(Use Create Selector and input Selector)
export const selectCartItems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   (cartItems) => cartItems.reduce((total, item) => item.quantity + total, 0)
);
