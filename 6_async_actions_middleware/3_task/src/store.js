import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './weather/weather.reducer';

const appReducer = combineReducers({ weather: weatherReducer });

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
