// import {createStore, combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {contacts} from './phonebook/reducers';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import {composeWithDevTools} from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contacts,
// });
// const store = createStore(rootReduser, composeWithDevTools());

const contactsPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {contacts: persistReducer(contactsPersistConfig, contacts)},
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
