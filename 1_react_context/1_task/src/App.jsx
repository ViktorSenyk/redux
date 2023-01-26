import React, { Component } from 'react';
import Header from './Header';
import { UserDataContext } from './contexts';

export default class App extends Component {
  state = {
    name: 'Nikola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  };
  render = () => (
    <div className="page">
      <UserDataContext.Provider value={this.state}>
        <Header />
      </UserDataContext.Provider>
    </div>
  );
}
