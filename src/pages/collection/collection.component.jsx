import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop-selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
const CollectionPage = ({ collection }) => {
   const { productId } = useParams();

   const { title, items } = useSelector((state) =>
      selectShopCollection(productId)(state)
   );

   return (
      <div>
         <h1>Category Component {productId}</h1>
         <CollectionPreview title={title} items={items} />
      </div>
   );
};

export default CollectionPage;
