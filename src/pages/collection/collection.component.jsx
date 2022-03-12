import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop-selector";

import SingleCollection from "../../components/single- collection/single-collection.component";

const CollectionPage = ({ productId }) => {
  const { title, items } = useSelector((state) =>
    selectShopCollection(productId)(state)
  );

  return (
    <div>
      <SingleCollection title={title} items={items} displayItems={10} />
    </div>
  );
};

export default CollectionPage;
