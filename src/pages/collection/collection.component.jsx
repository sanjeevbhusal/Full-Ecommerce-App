import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop-selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionPage = ({ collection }) => {
   const { productId } = useParams();

   const shop = useSelector((state) => selectShopCollection(productId)(state));
   console.log(shop);

   return <h1>Category Component {productId}</h1>;
};

export default CollectionPage;
