import React from "react";

import ReactPaginate from "react-paginate";
import classes from "./CommonPaginate.module.css";

const CommonPaginate = ({ getNextPage, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={"Next"}
        onPageChange={getNextPage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={" Previous"}
        renderOnZeroPageCount={null}
        className={classes.paginationBttns}
        previousClassName={classes.previousBttn}
        nextClassName={classes.nextBttn}
        activeClassName={classes.paginationActive}
      />
    </div>
  );
};

export default CommonPaginate;
