import { connect } from "react-redux";

import {
   CheckoutItemContainer,
   ItemContainer,
   ImageContainer,
   ArrowContainer,
} from "./checkout-item.styles";

import {
   addItemstoCart,
   delteItemsFromCart,
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({ cartItem, deleteItem, addItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;
   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img
               src={imageUrl}
               alt="product image"
               style={{ width: "80%", height: "100%", marginLeft: "0" }}
            />
         </ImageContainer>
         <ItemContainer>{name}</ItemContainer>
         <ItemContainer>
            <ArrowContainer onClick={() => deleteItem(cartItem)}>
               &#10094;
            </ArrowContainer>
            {quantity}
            <ArrowContainer onClick={() => addItem(cartItem)}>
               &#10095;
            </ArrowContainer>
         </ItemContainer>
         <ItemContainer>{price}</ItemContainer>
         <ItemContainer
            style={{ cursor: "pointer" }}
            onClick={() => deleteItem({ ...cartItem, deleteItem: true })}
         >
            &#10005;
         </ItemContainer>
      </CheckoutItemContainer>
   );
};

const mapDispatchToProps = (dispatch) => ({
   deleteItem: (item) => dispatch(delteItemsFromCart(item)),
   addItem: (item) => dispatch(addItemstoCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
