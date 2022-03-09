import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop-selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ shopData }) => {
   return (
      <div className="collection-overview">
         {shopData.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
         ))}
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   shopData: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
