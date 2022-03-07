export const addCartItem = (cartItems, currentItem) => {
   const alreadyExist = cartItems.find(
      (cartItem) => cartItem.id === currentItem.id
   );

   if (alreadyExist) {
      return cartItems.map((cartItem) =>
         cartItem.id === currentItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   return [...cartItems, { ...currentItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, currentItem) => {
   if (currentItem.deleteItem) {
      return cartItems.filter((cartItem) => cartItem.id !== currentItem.id);
   }

   const alreadyExist = cartItems.find(
      (cartItem) => cartItem.id === currentItem.id
   );

   if (alreadyExist.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== currentItem.id);
   }

   return cartItems.map((cartItem) =>
      cartItem.id === currentItem.id
         ? { ...cartItem, quantity: cartItem.quantity - 1 }
         : cartItem
   );
};
