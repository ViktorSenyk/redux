import { ADD, DEL } from './users.reducer';

export const addUser = newUserData => ({ type: ADD, payload: { newUserData } });
export const deleteUser = id => ({ type: DEL, payload: { id } });
