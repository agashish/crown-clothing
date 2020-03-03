import {cartTypes } from './cart.types';

const INITIAL_CART = {
    itemCounter: 5,
    hidden: true
}
const cartReducer = (state = INITIAL_CART, action) => {

    switch(action.type) {

        case cartTypes.CART_ITEM_UP: 
            return {
                ...state,
                itemCounter: state.itemCounter + action.payload
            }
        
        case cartTypes.TOGGLE_CART_HIDDEN:
            console.log(cartTypes.TOGGLE_CART_HIDDEN) 
            return {
                ...state,
                hidden: !state.hidden
            }            
        
        default: return state;            
    }
}

export default cartReducer;