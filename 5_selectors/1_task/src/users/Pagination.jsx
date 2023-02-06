import React, { Component } from 'react';

// export default class Pagination extends Component {
//   render = () => {
//     const { currentPage, goNext, goPrev, totalItems, itemsPerPage } = this.props;
//     const lastPageNumber = Math.ceil(totalItems / itemsPerPage);
//     const isPrevPageAvailable = currentPage === 0;
//     const isNextPageAvailable = currentPage === lastPageNumber - 1;

//     return (
//       <div className="pagination">
//         <button className="btn" onClick={() => goPrev()} disabled={isPrevPageAvailable}>
//           {!isPrevPageAvailable && '←'}
//         </button>
//         <span className="pagination__page">{currentPage + 1}</span>
//         <button className="btn" onClick={() => goNext()} disabled={isNextPageAvailable}>
//           {!isNextPageAvailable && '→'}
//         </button>
//       </div>
//     );
//   };
// }

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const prevPageAvailable = currentPage > 0;
  const nextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!prevPageAvailable}>
        {prevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!nextPageAvailable}>
        {nextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;