import store from "./store";
import { ActionCreators } from './users.actions';

store.dispatch(ActionCreators.add({ id: 50, name: 'Tom' }));
store.dispatch(ActionCreators.add({ id: 5, name: 'Din' }));
store.dispatch(ActionCreators.add({ id: 2, name: 'Bob' }));
console.log(store.getState());
store.dispatch(ActionCreators.del(5));
console.log(store.getState());
store.dispatch(ActionCreators.del({ id: 80, name: 'AA' }));
console.log(store.getState());
