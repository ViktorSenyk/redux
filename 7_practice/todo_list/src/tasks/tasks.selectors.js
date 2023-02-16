export const getTasksSelector = state => state.tasks.tasksList;
export const getSortedTasksSelector = state =>
  state.tasks.tasksList.sort((a, b) => a.done - b.done);
