import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = (collectionUrlParams) => {
  return createSelector([selectShopData], (collections) =>
    collections ? collections[collectionUrlParams] : null
  );
};
