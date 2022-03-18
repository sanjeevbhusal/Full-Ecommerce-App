import { takeLatest, put, all, call } from "redux-saga/effects";

import { clearCart } from "./cart-actions";

import UserTypes from "../user/user-types";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export default cartSagas;
