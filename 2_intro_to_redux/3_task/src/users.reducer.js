import { ADD, DEL } from "./users.actions";

const initialState = { usersList: [] };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.value],
      };
    case DEL:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.value),
      };
    default:
      return state;
  }
};

export default usersReducer;