export const toggleCartHidden = () => ({
   type: "TOGGLE_CART_HIDDEN",
});

export const addItemstoCart = (item) => ({
   type: "ADD_ITEMS_TO_CART",
   payload: item,
});

export const delteItemsFromCart = (item) => ({
   type: "DELETE_ITEMS_FROM_CART",
   payload: item,
});

export const setCartItems = (cartItems) => ({
   type: "SET_CART_ITEMS",
   payload: cartItems,
});
