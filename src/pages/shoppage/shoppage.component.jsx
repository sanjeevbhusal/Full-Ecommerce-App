import { Outlet } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import { Title } from "./shoppage.styles";

const ShopPage = (props) => {
   return (
      <div className="shop-page">
         <Title>Collection</Title>
         <CollectionOverview />
         <Outlet />
      </div>
   );
};

export default ShopPage;
