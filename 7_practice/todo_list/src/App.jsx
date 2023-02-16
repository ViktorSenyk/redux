import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './tasks/components/TodoList';

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
