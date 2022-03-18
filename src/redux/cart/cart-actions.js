import CartTypes from "./cart-types";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItemstoCart = (item) => ({
  type: CartTypes.ADD_ITEMS_TO_CART,
  payload: item,
});

export const delteItemsFromCart = (item) => ({
  type: CartTypes.DELETE_ITEMS_FROM_CART,
  payload: item,
});

export const setCartItems = (cartItems) => ({
  type: CartTypes.SET_CART_ITEMS,
  payload: cartItems,
});

export const clearCart = () => ({ type: CartTypes.CLEAR_CART });
