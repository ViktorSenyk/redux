import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default function TasksList({ tasks, fetchTasks }) {
  return (
    <ul className="list">
      {tasks.map(task => (
        <Task key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  fetchTasks: PropTypes.func.isRequired,
};