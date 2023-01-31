export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DEL';

export const addUser = newUser => ({ type: ADD, value: newUser });
export const deleteUser = id => ({ type: DEL, value: id });
