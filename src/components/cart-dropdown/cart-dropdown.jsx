import CustomButton from "../custom-button/custom-button.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
   return (
      <div className="cart-dropdown">
         <div className="cart-items"></div>
         <CustomButton className="cart-button">GO TO CHECKOUT</CustomButton>
      </div>
   );
};

export default CartDropdown;
