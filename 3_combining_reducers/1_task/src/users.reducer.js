import { ADD, DELETE, UPDATE } from './users.actions';

const usersList = [];

const usersReducer = (state = { usersList }, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.newUser],
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    case UPDATE:
      return {
        ...state,
        usersList: state.usersList.map(user =>
          user.id === action.payload.userId ? { ...user, ...action.payload.newUserInfo } : user,
        ),
      };
    default:
      return state;
  }
};

export default usersReducer;
