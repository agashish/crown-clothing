import {shopTypes} from './shop.types';
export const setShopData = collections => ({
    type: shopTypes.SET_SHOP_DATA,
    payload: collections
})