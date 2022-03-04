import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            {cartItems.map((cartItem) => (
               <CartItem item={cartItem} />
            ))}
         </div>
         <CustomButton className="cart-button">GO TO CHECKOUT</CustomButton>
      </div>
   );
};

const mapStatetoProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStatetoProps)(CartDropdown);
