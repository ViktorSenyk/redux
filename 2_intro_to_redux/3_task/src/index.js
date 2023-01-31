import store from "./store";
import { add, del } from "./users.actions";

store.dispatch(add({ id: 50, name: 'Tom' }));
store.dispatch(add({ id: 5, name: 'Din' }));
store.dispatch(add({ id: 2, name: 'Bob' }));
console.log(store.getState());
store.dispatch(del(5));
console.log(store.getState());
store.dispatch(add({ id: 80, name: 'AA' }));
console.log(store.getState());
