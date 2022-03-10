import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart-selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
   Header,
   CheckOutPage,
   HeaderItems,
   Price,
   Warning,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice, hideCartDropdown }) => {
   console.log(hideCartDropdown);
   return (
      <CheckOutPage>
         <Header>
            <HeaderItems>Product</HeaderItems>
            <HeaderItems>Description</HeaderItems>
            <HeaderItems>Quantity</HeaderItems>
            <HeaderItems>Price</HeaderItems>
            <HeaderItems>Remove</HeaderItems>
         </Header>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         <Price>{`Total ${totalPrice} $`}</Price>
         <Warning>
            *Please use the following credit card details for payments*
            <br />
            4242 4242 4242 4242 - Exp : 01/22 - CVV : 123
         </Warning>
         <StripeButton price={totalPrice} />
      </CheckOutPage>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   totalPrice: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
