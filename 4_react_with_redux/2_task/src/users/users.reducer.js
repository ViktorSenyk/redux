export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DEL';

export const usersReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, usersList: [...state.usersList, action.payload.newUserData] };
    case DEL:
      return { ...state, usersList: state.usersList.filter(user => user.id !== action.payload.id) };
    default:
      return state;
  }
};
