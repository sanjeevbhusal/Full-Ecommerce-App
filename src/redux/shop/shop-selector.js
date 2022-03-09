import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
   hats: 1,
   sneakers: 2,
   jackets: 3,
   womens: 4,
   mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
   [selectShop],
   (shop) => shop.shopData
);

export const selectShopCollection = (collectionUrlParams) => {
   //    console.log("collectionUrlParams", collectionUrlParams);
   return createSelector([selectShopData], (collections) =>
      collections.find(
         (collection) =>
            collection.id === COLLECTION_ID_MAP[collectionUrlParams]
      )
   );
};
