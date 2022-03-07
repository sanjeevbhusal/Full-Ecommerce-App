import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addItemstoCart } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItemsToCart }) => {
   const { name, imageUrl, price } = item;
   return (
      <div className="card">
         <div
            className="card-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
         ></div>
         <div className="card-info">
            <span className="card-name">{name}</span>
            <span className="card-price">{price}</span>
         </div>
         <CustomButton onClick={() => addItemsToCart(item)} inverted>
            Add to Cart
         </CustomButton>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   addItemsToCart: (item) => dispatch(addItemstoCart(item)),
});

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
