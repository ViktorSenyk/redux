import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTask } from '../tasks.gateway';

export default function CreateTaskInput({ fetchTasks }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="btn create-task__btn"
        onClick={() => createTask({ title: inputValue, done: false }).then(() => fetchTasks())}
      >
        Create
      </button>
    </div>
  );
}

CreateTaskInput.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
};
