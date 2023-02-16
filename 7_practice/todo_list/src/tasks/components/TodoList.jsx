import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasksSelector, getSortedTasksSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';

function TodoList({ tasks, fetchTasks }) {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput fetchTasks={fetchTasks} />
        <TasksList tasks={tasks} fetchTasks={fetchTasks} />
      </main>
    </>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  fetchTasks: PropTypes.func.isRequired,
};

const mapState = state => ({
  tasks: getSortedTasksSelector(state),
});
const mapDispatch = {
  fetchTasks: tasksActions.fetchTasksAction,
};

export default connect(mapState, mapDispatch)(TodoList);
