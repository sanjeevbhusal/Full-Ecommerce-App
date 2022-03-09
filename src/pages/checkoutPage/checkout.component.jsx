import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart-selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice, hideCartDropdown }) => {
   console.log(hideCartDropdown);
   return (
      <div className="checkout-page">
         <div className="checkout-header">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
         </div>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         <div className="checkout-price">{`Total ${totalPrice} $`}</div>
         <div className="test-warning">
            *Please use the following credit card details for payments*
            <br />
            4242 4242 4242 4242 - Exp : 01/22 - CVV : 123
         </div>
         <StripeButton price={totalPrice} />
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   totalPrice: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
