import {createSelector} from 'reselect';

// #### INPUT SELECTOR - DOES NOT USE CREATE SELECTOR
const selectCart = state => state.cart;

// #### OUTPUT SELECTOR - IT WILL USE BOTH INPUT SELECTOR & CREATE SELECTOR | MEMOIZE SELECTOR
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
);

// #### CART ITEM COUNT SELECTOR
export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 
        0
    )
)  