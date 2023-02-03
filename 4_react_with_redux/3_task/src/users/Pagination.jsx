import React, { Component } from 'react';

export default class Pagination extends Component {
  render = () => {
    const { currentPage, goNext, goPrev, totalItems } = this.props;
    const lastPageNumber = Math.ceil(totalItems / 3);
    return (
      <div className="pagination">
        <button className="btn" onClick={() => goPrev()} disabled={currentPage === 0}>
          ←
        </button>
        <span className="pagination__page">{currentPage + 1}</span>
        <button
          className="btn"
          onClick={() => goNext()}
          disabled={currentPage + 1 === lastPageNumber}
        >
          →
        </button>
      </div>
    );
  };
}
