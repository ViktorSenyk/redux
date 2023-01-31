import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
store.dispatch(addProduct({ id: 1, name: 'Milk' }));
store.dispatch(addProduct({ id: 2, name: 'Meat' }));
store.dispatch(addProduct({ id: 3, name: 'Cola' }));

store.dispatch(removeProduct(3));

store.dispatch(setUser({name: 'Viktor', age: 27}));
store.dispatch(removeUser());
