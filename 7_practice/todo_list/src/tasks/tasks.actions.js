import { fetchTasks } from './tasks.gateway';

export const ADD_TASKS_TO_STORE_FROM_SERVER = 'TASKS/ADD_TASKS_TO_STORE_FROM_SERVER';

const addTasksToStoreAction = tasks => ({
  type: ADD_TASKS_TO_STORE_FROM_SERVER,
  payload: { tasks },
});

export const fetchTasksAction = () => dispatch =>
  fetchTasks().then(tasks => dispatch(addTasksToStoreAction(tasks)));
