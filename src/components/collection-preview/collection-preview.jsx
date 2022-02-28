import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
   return (
      <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
            {items
               .filter((item, index) => index < 4)
               .map((item) => {
                  return (
                     <CollectionItem
                        key={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                     />
                  );
               })}
         </div>
      </div>
   );
};

export default CollectionPreview;
