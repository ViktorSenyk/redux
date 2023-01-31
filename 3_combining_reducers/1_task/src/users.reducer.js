import { ADD, DELETE, UPDATE } from './users.actions';

const usersList = [];

const usersReducer = (state = { users: { usersList } }, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        users: { ...state.users, usersList: [...state.users.usersList, action.payload.newUser] },
      };
    case DELETE:
      return {
        ...state,
        users: {
          ...state.users,
          usersList: state.users.usersList.filter(user => user.id !== action.payload.userId),
        },
      };
    case UPDATE:
      return {
        ...state,
        users: {
          ...state.users,
          usersList: state.users.usersList.map(user =>
            user.id === action.payload.userId ? { ...user, ...action.payload.newUserInfo } : user,
          ),
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
