import {
   CartItemContainer,
   CartItemDescription,
   CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
   return (
      <CartItemContainer>
         <CartItemImage src={imageUrl} alt={name} />
         <CartItemDescription className="cart-item-description">
            <span>{name}</span>
            <span>
               {quantity} x {price}
            </span>
         </CartItemDescription>
      </CartItemContainer>
   );
};

export default CartItem;
