export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DEL';

export const add = newUser => ({ type: ADD, value: newUser });
export const del = id => ({ type: DEL, value: id });
