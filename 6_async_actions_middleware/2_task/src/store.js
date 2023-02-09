import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer } from './users/users.reducer';

const appReducer = combineReducers({ users: usersReducer });

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
