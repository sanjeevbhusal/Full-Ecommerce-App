import { connect } from "react-redux";

import {
   addItemstoCart,
   delteItemsFromCart,
} from "../../redux/cart/cart-actions";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem, deleteItem, addItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;
   return (
      <div className="checkout-item">
         <div className="image-container">
            <img src={imageUrl} alt="product image" />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <span className="arrow" onClick={() => deleteItem(cartItem)}>
               &#10094;
            </span>
            {quantity}
            <span className="arrow" onClick={() => addItem(cartItem)}>
               &#10095;
            </span>
         </span>
         <span className="price">{price}</span>
         <span
            className="remove-button"
            onClick={() => deleteItem({ ...cartItem, deleteItem: true })}
         >
            &#10005;
         </span>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   deleteItem: (item) => dispatch(delteItemsFromCart(item)),
   addItem: (item) => dispatch(addItemstoCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
