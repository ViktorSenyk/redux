import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class Users extends Component {
  render = () => {
    const { usersList, addUser, deleteUser } = this.props;
    return (
      <div className="users">
        <button
          className="users__create-btn"
          onClick={() => {
            addUser({ id: Math.random(), name: 'Some name' });
          }}
        >
          Create user
        </button>
        <ul className="users__list">
          {usersList.map(userData => (
            <li className="users__list-item" key={userData.id}>
              <span>{`${userData.name} # ${userData.id}`}</span>
              <button className="users__delete-btn" onClick={() => deleteUser(userData.id)}>
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

const mapState = state => ({ usersList: state.users.usersList });

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
