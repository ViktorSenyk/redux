import { USER_SET, USER_REMOVE } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        name: action.payload.user,
      };
    case USER_REMOVE:
      return null;
    default:
      return state;
  }
};

export default userReducer;
