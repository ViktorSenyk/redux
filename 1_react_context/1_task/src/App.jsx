import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

export default class App extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () =>
    this.setState({ theme: this.state.theme === themes.light ? themes.dark : themes.light });

  render = () => (
    <>
      <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>
      <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
    </>
  );
}
