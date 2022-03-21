import {
  firestoreDatabase,
  collection,
  getDocs,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop-types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const asyncfetchCollectionStart = () => {
  return (dispatch) => {
    const colRef = collection(firestoreDatabase, "collections");
    dispatch(fetchCollectionsStart());

    getDocs(colRef)
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
