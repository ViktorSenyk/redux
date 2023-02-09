import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
