import React, { Component } from 'react';

export default class Options extends Component {
  render = () => {
    const { title, options, moveOptions } = this.props;
    return (
      <div className="options">
        <div className="options__title">{title}</div>
        <ul className="options__list">
          {options.map(option => (
            <li key={option.id}>
              <button className="options__list-item" onClick={() => moveOptions(option.id)}>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
