import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

export default class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () =>
    this.setState({ theme: this.state.theme === themes.dark ? themes.light : themes.dark });

  render = () => (
    <>
      <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>
      <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
    </>
  );
}
