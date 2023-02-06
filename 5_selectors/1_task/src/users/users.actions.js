import { NEXT, PREV } from './users.reducer';

export const goNext = () => ({ type: NEXT });
export const goPrev = () => ({ type: PREV });

// export const GO_NEXT = 'USERS/GO_NEXT';
// export const GO_PREV = 'USERS/GO_PREV';

// export const goNextPage = () => {
//   return {
//     type: GO_NEXT,
//   };
// };

// export const goPrevPage = () => {
//   return {
//     type: GO_PREV,
//   };
// };