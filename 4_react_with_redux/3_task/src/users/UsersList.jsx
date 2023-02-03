import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as usersActions from './users.actions';
import User from './User';

class UsersList extends Component {
  render = () => {
    const { users, currentPage, goNext, goPrev } = this.props;
    const itemsPerPage = 3;
    const usersForCurrentPage = users.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    );

    return (
      <>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersForCurrentPage.map(userData => (
            <User key={userData.id} name={userData.name} age={userData.age} />
          ))}
        </ul>
      </>
    );
  };
}

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goNext: usersActions.goNext,
  goPrev: usersActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
