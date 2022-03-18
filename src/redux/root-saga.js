import { all, call } from "redux-saga/effects";
import userSagas from "./user/user-sagas";
import cartSagas from "./cart/cart-saga";
import shopSagas from "./shop/shop-saga";

function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

export default rootSaga;
