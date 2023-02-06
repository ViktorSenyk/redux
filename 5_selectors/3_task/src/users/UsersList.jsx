import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filteredUsersSelector, filterTextSelector } from './users.selectors';
import { filterTextUpdate } from './users.actions';
import User from './User';
import Filter from '../Filter';

class UsersList extends Component {
  render = () => {
    const { filteredUsers, filterText, onUpdateFilterText } = this.props;
    return (
      <>
        <Filter
          filterText={filterText}
          count={filteredUsers.length}
          onChange={onUpdateFilterText}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    );
  };
}

const mapState = state => ({
  filteredUsers: filteredUsersSelector(state),
  filterText: filterTextSelector(state),
});

const mapDispatch = {
  onUpdateFilterText: filterTextUpdate,
};

export default connect(mapState, mapDispatch)(UsersList);
