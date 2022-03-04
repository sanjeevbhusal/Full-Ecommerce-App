const filtercart = (cartItems, currentItem) => {
   const duplicate = cartItems.find(
      (cartItem) => cartItem.id === currentItem.id
   );

   if (duplicate) {
      return cartItems.map((cartItem) =>
         cartItem.id === currentItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   return [...cartItems, { ...currentItem, quantity: 1 }];
};

export default filtercart;
