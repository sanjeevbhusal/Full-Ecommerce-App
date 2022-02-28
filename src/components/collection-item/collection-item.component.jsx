import "./collection-item.styles.scss";
const CollectionItem = ({ name, imageUrl, price }) => {
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
      </div>
   );
};

export default CollectionItem;
