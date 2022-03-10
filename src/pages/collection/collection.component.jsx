import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop-selector";

import SingleCollection from "../../components/single- collection/single-collection.component";

const CollectionPage = () => {
   const { productId } = useParams();

   const { title, items } = useSelector((state) =>
      selectShopCollection(productId)(state)
   );

   return (
      <div>
         <h1>Category Component {productId}</h1>
         <SingleCollection title={title} items={items} displayItems={10} />
      </div>
   );
};

export default CollectionPage;
