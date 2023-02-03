import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList';

class App extends Component {
  render = () => (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
