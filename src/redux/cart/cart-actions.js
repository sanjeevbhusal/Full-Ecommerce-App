export const toggleCartHidden = () => ({
   type: "TOGGLE_CART_HIDDEN",
});

export const addItemstoCart = (item) => ({
   type: "ADD_ITEMS_TO_CART",
   payload: item,
});
