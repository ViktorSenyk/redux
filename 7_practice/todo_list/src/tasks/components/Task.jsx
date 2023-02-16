import React from 'react';
import PropTypes from 'prop-types';
import { updateTask, deleteTask } from '../tasks.gateway';

export default function Task({ task, fetchTasks }) {
  return (
    <li className={`list-item ${task.done && 'list-item_done'}`}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={task.done}
        onChange={() => updateTask(task.id, { ...task, done: !task.done }).then(() => fetchTasks())}
      />
      {task.title}
      <button
        className="list-item__delete-btn"
        onClick={() => deleteTask(task.id).then(() => fetchTasks())}
      />
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  fetchTasks: PropTypes.func.isRequired,
};
