import React, { Component } from 'react';
import { UserDataContext } from './contexts';

export default class UserMenu extends Component {
  render = () => (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
      <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
    </div>
  );
}

UserMenu.contextType = UserDataContext;
