import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as usersActions from './users.actions';
import User from './User';

class UsersList extends Component {
  render = () => {
    const { users, currentPage, goNext, goPrev } = this.props;
    const usersForCurrentPage = users.slice(currentPage * 3, (currentPage + 1) * 3);

    return (
      <>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
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
