import {cartTypes } from './cart.types';
import {addItemToCart, decreaseItemById} from './cart.utils';

const INITIAL_CART = {
    itemCounter: 0,
    hidden: true,
    cartItems: []
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
              
        case cartTypes.ADD_ITEM: 
            const cartItemArray = addItemToCart(state.cartItems, action.payload)
            return {
                ...state,
                cartItems: cartItemArray
            }           
        
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => {
                    console.log(cartItem.id + '!==' + action.payload)
                    return cartItem.id !== action.payload
                })
            }

        case cartTypes.DECREASE_ITEM_BY_ID:
            return {
                ...state,
                cartItems: decreaseItemById(state.cartItems, action.payload) 
            }          
  
        default: return state;            
    }
}

export default cartReducer;