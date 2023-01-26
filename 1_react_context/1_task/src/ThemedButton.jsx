import React, { Component } from 'react';
import { ThemeContext } from './themes-context';

export default class ThemedButton extends Component {
  render = () => (
    <button
      {...this.props}
      style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
      className="btn"
    />
  );
}

ThemedButton.contextType = ThemeContext;
