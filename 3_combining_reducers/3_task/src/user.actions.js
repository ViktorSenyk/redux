export const USER_SET = 'USER/SET';
export const USER_REMOVE = 'PRODUCT/REMOVE';

export const setUser = user => ({ type: USER_SET, payload: { user } });
export const removeUser = () => ({ type: USER_REMOVE });
