import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestoreDatabase,
  collection,
  getDocs,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop-types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop-actions";

function* AsyncFetchCollections() {
  try {
    const colRef = yield collection(firestoreDatabase, "collections");
    const collectionsSnapshot = yield getDocs(colRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      collectionsSnapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// Starts AsyncFetchCollections on each dispatched `FETCH_COLLECTIONS_START` action.

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    AsyncFetchCollections
  );
}

function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

export default shopSagas;
