import { combineReducers } from 'redux'; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './../redux/user-reducer/user.reducer';
import cartReducer from './../redux/cart-reducer/cart-reducer';
import directoryReducer from './../redux/directory-reducer/directory-reducer';
import shopReducer from './../redux/shop-reducer/shop-reducer';

// #### MAKE SOME CONFIGURATION OF ROOT REDUCERS
// #### EXPLAIN HOW WILL IT PERSISTED AMD FROM WHERE TO START IT
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


// #### WE DO HAVE PERSISTANCE CAPABILITIES AND THANKS TO OUR @persist-redux package
export default persistReducer(persistConfig, rootReducer);