import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';
import productsReducer from './card.reducer';

const appReducers = combineReducers({
  language: languageReducer,
  user: userReducer,
  card: productsReducer,
});

const store = createStore(appReducers);

export default store;
