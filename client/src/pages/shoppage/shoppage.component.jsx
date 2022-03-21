import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { Title } from "./shoppage.styles";

const ShopPage = ({ fetchCollection }) => {
  const { productId } = useParams();

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <div className="shop-page">
      {productId ? (
        <CollectionPageContainer />
      ) : (
        <>
          <Title>Collection</Title>
          <CollectionsOverviewContainer />
        </>
      )}
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
