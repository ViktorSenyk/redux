export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';
export const UPDATE = 'CUSER/UPDATE';

export const addUser = newUser => ({ type: ADD, payload: { newUser } });
export const deleteUser = userId => ({ type: DELETE, payload: { userId } });
export const updateUser = (userId, newUserInfo) => ({
  type: UPDATE,
  payload: { userId, newUserInfo },
});
