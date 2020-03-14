import { createStore, applyMiddleware } from 'redux';

// #### IT WILL ALLOW TO BROWSER TO MAKE CACHE OF OUR STORE
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// #### PERSISTED VERSION OF OUR STORE HERE
export const persistor = persistStore(store);

export default { store, persistor };

