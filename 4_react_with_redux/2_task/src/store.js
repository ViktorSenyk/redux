import { createStore, combineReducers } from 'redux';
import { usersReducer } from './users/users.reducer';

const appReducers = combineReducers({
  users: usersReducer,
});

const store = createStore(appReducers);

store.subscribe(() => console.log(store.getState()));

export default store;
