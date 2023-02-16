import { ADD_TASKS_TO_STORE_FROM_SERVER } from './tasks.actions';

const initialState = {
  tasksList: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS_TO_STORE_FROM_SERVER:
      return {
        ...state,
        tasksList: action.payload.tasks,
      };
    default:
      return state;
  }
};

export default tasksReducer;
