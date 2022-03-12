import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestoreDatabase,
  collection,
  onSnapshot,
  getDocs,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateShopdata } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/withSpinner/withSpinner.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { Title } from "./shoppage.styles";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPagewithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ updateCollections }) => {
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const colRef = collection(firestoreDatabase, "collections");

    onSnapshot(colRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
    // getDocs(colRef).then((snapshot) => {
    //   console.log(snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div className="shop-page">
      {productId ? (
        <CollectionPagewithSpinner productId={productId} isLoading={loading} />
      ) : (
        <>
          <Title>Collection</Title>
          <CollectionOverviewWithSpinner isLoading={loading} />
        </>
      )}
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  updateCollections: (shopData) => dispatch(updateShopdata(shopData)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
