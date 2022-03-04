import "./cart-item.styles.scss";
const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
   return (
      <div className="cart-item">
         <img className="cart-item-img" src={imageUrl} alt={name} />
         <div className="cart-item-description">
            <span className="name">{name} </span>
            <span className="price">
               {quantity} x {price}
            </span>
         </div>
      </div>
   );
};

export default CartItem;
