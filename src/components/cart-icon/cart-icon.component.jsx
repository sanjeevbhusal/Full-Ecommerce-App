import { ReactComponent as ShoppingIcon } from "../assets/cart-icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
   return (
      <div className="cart-icon-container" onClick={toggleCartHidden}>
         <ShoppingIcon className="cart-icon" />
         <span className="cart-number">0</span>
      </div>
   );
};

const mapDispatchtoProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchtoProps)(CartIcon);
