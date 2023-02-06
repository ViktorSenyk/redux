import { createSelector } from 'reselect';

const allUsersSelector = state => state.users.usersList;
export const filterTextSelector = state => state.users.filterText;

export const filteredUsersSelector = createSelector(
  [allUsersSelector, filterTextSelector],
  (allUsersList, filterText) =>
    allUsersList.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase())),
);
