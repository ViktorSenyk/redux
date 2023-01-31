export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DEL';

export const ActionCreators = {
    add: newUser => ({ type: ADD, value: newUser }),
    del: id => ({ type: DEL, value: id })
}