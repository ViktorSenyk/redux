import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Users from './users/Users';

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
