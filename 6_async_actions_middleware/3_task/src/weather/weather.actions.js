import getWeatherGateway from './weather.gateway';

export const WEATHER_FETCHING = 'WEATER/WEAHTER_FETCHING';
export const ADD_WEAHTER_TO_STORE = 'WEATER/ADD_WEAHTER_TO_STORE';

export const addWeatherToStoreAction = weatherData => ({
  type: ADD_WEAHTER_TO_STORE,
  payload: { weatherData },
});

export const getWeatherAction = () => dispatch =>
  getWeatherGateway().then(weatherData => dispatch(addWeatherToStoreAction(weatherData)));
