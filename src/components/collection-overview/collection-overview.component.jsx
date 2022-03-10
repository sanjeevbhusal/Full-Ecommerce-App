import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop-selector";

import SingleCollection from "../single- collection/single-collection.component";

const CollectionOverview = ({ shopData }) => {
   return (
      <div className="collection-overview">
         {shopData.map(({ id, ...otherProps }) => (
            <SingleCollection key={id} {...otherProps} displayItems={4} />
         ))}
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   shopData: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
