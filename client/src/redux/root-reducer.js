import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to localStorage for web

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//Persist Config
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

//Persisted Reducer
export default persistReducer(persistConfig, rootReducer);
