// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Pagination from './Pagination';
// import * as usersActions from './users.actions';
// import User from './User';
// import {usersListSelector, currentPageSelector} from './users.selectors'

// class UsersList extends Component {
//   render = () => {
//     const { users, currentPage, goNext, goPrev } = this.props;
//     const itemsPerPage = 3;
//     const usersForCurrentPage = users.slice(
//       currentPage * itemsPerPage,
//       (currentPage + 1) * itemsPerPage,
//     );

//     return (
//       <>
//         <Pagination
//           goNext={goNext}
//           goPrev={goPrev}
//           currentPage={currentPage}
//           totalItems={users.length}
//           itemsPerPage={itemsPerPage}
//         />
//         <ul className="users">
//           {usersForCurrentPage.map(userData => (
//             <User key={userData.id} name={userData.name} age={userData.age} />
//           ))}
//         </ul>
//       </>
//     );
//   };
// }

// const mapState = state => ({
//   users: usersListSelector(state),
//   currentPage: currentPageSelector(state),
// });

// const mapDispatch = {
//   goNext: usersActions.goNext,
//   goPrev: usersActions.goPrev,
// };

// const connector = connect(mapState, mapDispatch);

// export default connector(UsersList);


import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import { goPrevPage, goNextPage } from './users.actions';
import { currentPageSelector, usersListSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(({ id, ...user }) => (
          <User key={id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goPrev: goPrevPage,
  goNext: goNextPage,
};

export default connect(mapState, mapDispatch)(UsersList);