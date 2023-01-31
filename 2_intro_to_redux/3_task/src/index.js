import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 50, name: 'Tom' }));
store.dispatch(addUser({ id: 5, name: 'Din' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
console.log(store.getState());
store.dispatch(deleteUser(5));
console.log(store.getState());
store.dispatch(deleteUser({ id: 80, name: 'AA' }));
console.log(store.getState());
