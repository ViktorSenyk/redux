import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList';

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
