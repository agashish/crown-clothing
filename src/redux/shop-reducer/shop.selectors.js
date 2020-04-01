import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop], 
    (shop) => shop.collections
)

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]): []
)

export const selectShopByCategory = categoryName => {
    return createSelector(
        [selectShopData],
        (collections) => (collections ? collections[categoryName] : null)
    )
}

export const filterItemsOnDemand = categoryName => {
    return createSelector(
        [selectShopData],
        (collections) => (collections ? collections[categoryName].items.filter((item, idx) => idx < 4) : null)
    )
}

export const selectCollectionForPreview = createSelector(
    [selectShop],
    (shop) => shop.collections
)