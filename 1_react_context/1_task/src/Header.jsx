import React, { Component } from 'react';
import UserMenu from './UserMenu';

export default class Header extends Component {
  render = () => (
    <header className="header">
      <UserMenu />
    </header>
  );
}