import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop], 
    (shop) => shop.collections
)

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    (collections) => Object.keys(collections).map(key => collections[key])
)

export const selectShopByCategory = categoryName => {
    return createSelector(
        [selectShopData],
        (collections) => collections[categoryName] 
    )
}