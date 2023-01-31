import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return (state = 0);

    default:
      return state;
  }
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());