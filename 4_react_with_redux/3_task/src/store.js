// import { createStore, combineReducers } from 'redux';
// import { usersReducer } from './users/users.reducer';

// const appReducer = combineReducers({ users: usersReducer });

// const store = createStore(appReducer);

// export default store;

import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer);

export default store;