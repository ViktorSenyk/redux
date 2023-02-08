import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
