import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer } from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const appReducer = combineReducers({ counter: counterReducer });

const store = createStore(appReducer, applyMiddleware(logger));

export default store;
