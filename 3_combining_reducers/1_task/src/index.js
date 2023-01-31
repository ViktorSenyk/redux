import store from './store';
import { counterIncrement, counterDecrement, counterReset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(addUser({ id: 3, name: 'Din' }));

store.dispatch(deleteUser(2));

store.dispatch(counterDecrement());
store.dispatch(counterDecrement());
store.dispatch(counterDecrement());

store.dispatch(counterReset());

store.dispatch(counterIncrement());

store.dispatch(updateUser(1, {name: 'Viktor', age: 27}))