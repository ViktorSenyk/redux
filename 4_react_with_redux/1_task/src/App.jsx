import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
