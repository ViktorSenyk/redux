import React, { Component } from 'react';

export default class User extends Component {
  render = () => {
    const { name, age } = this.props;

    return (
      <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    );
  };
}
