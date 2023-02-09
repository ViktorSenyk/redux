import { ADD_WEAHTER_TO_STORE } from './weather.actions';

const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_WEAHTER_TO_STORE:
      return action.payload.weatherData;
    default:
      return state;
  }
};

export default weatherReducer;
