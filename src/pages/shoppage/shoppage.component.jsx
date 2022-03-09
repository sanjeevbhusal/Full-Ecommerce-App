import { Outlet } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import "./shoppage.styles.scss";

const ShopPage = (props) => {
   return (
      <div className="shop-page">
         <h1>Collection</h1>
         <CollectionOverview />
         <Outlet />
      </div>
   );
};

export default ShopPage;
