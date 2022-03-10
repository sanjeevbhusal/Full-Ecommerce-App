import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart-actions.js";

import CartItem from "../cart-item/cart-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import {
   CartDropdownContainer,
   CartItemsContainer,
   EmptyMessageContainer,
} from "./cart-dropdown.styles.js";

const CartDropdown = ({ cartItems, dispatch }) => {
   const navigate = useNavigate();
   return (
      <CartDropdownContainer>
         <CartItemsContainer>
            {cartItems.length ? (
               cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
               ))
            ) : (
               <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
         </CartItemsContainer>
         <CustomButton
            style={{ marginTop: "40px" }}
            onClick={() => {
               navigate("checkout");
               dispatch(toggleCartHidden());
            }}
         >
            GO TO CHECKOUT
         </CustomButton>
      </CartDropdownContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
