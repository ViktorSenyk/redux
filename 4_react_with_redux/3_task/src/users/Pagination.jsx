import React, { Component } from 'react';

export default class Pagination extends Component {
  render = () => {
    const { currentPage, goNext, goPrev, totalItems } = this.props;
    const lastPageNumber = Math.ceil(totalItems / 3);
    const isPrevPageAvailable = currentPage === 0;
    const isNextPageAvailable = currentPage + 1 !== lastPageNumber;

    return (
      <div className="pagination">
        <button className="btn" onClick={() => goPrev()} disabled={isPrevPageAvailable}>
          {!isPrevPageAvailable && '←'}
        </button>
        <span className="pagination__page">{currentPage + 1}</span>
        <button className="btn" onClick={() => goNext()} disabled={!isNextPageAvailable}>
          {isNextPageAvailable && '→'}
        </button>
      </div>
    );
  };
}
