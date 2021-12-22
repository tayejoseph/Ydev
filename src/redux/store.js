import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';

import authReducer from './reducers/auth_reducer';
import messagesReducer from './reducers/message_reducer';
import noteReducer from './reducers/note_reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'noteReducer'],
};

const customMiddleWare = store => next => action => {
  next(action);
};

function logger({getState}) {
  return next => action => {
    const returnVal = next(action);
    return returnVal;
  };
}

const reducers = combineReducers({
  authReducer,
  noteReducer,
  messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, customMiddleWare)),
);

export const persistor = persistStore(store);

export default store;
