import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addItemstoCart } from "../../redux/cart/cart-actions";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import {
   CardContainer,
   CardImageContainer,
   CardInfoContainer,
   CardNameContainer,
   CardPriceContainer,
   StyledCustomButton,
} from "./single-item-styles.js";

const SingleItem = ({ item, addItemsToCart }) => {
   const { name, imageUrl, price } = item;
   return (
      <CardContainer>
         <CardImageContainer
            imageUrl={imageUrl}
            className="image"
         ></CardImageContainer>
         <CardInfoContainer>
            <CardNameContainer>{name}</CardNameContainer>
            <CardPriceContainer>{price}</CardPriceContainer>
         </CardInfoContainer>
         <StyledCustomButton onClick={() => addItemsToCart(item)} inverted>
            Add to Cart
         </StyledCustomButton>
      </CardContainer>
   );
};

const mapDispatchToProps = (dispatch) => ({
   addItemsToCart: (item) => dispatch(addItemstoCart(item)),
});

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
