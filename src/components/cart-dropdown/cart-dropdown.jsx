import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors.js";

import CartItem from "../cart-item/cart-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))}
         </div>
         <CustomButton className="cart-button">GO TO CHECKOUT</CustomButton>
      </div>
   );
};

const mapStatetoProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStatetoProps)(CartDropdown);
