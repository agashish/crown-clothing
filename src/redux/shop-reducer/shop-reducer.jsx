import {shopTypes} from './shop.types';
const INITIAL_STATE = {
    collections: null
}

const shopReducer = ( state = INITIAL_STATE, action ) => {  
    switch(action.type) {
      case shopTypes.SET_SHOP_DATA:
        console.log('GETTING DATA') 
        return {
          ...state,
          collections: action.payload
        }

        default: return state;
    }
}

export default shopReducer;