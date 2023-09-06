import ReactPaginate from "react-paginate";

import classes from "./Paginate.module.css";

const Paginate = ({
  onPageChange,
  pageCount,
}) => {

  return (
      <div className={classes.paginate}>
    <ReactPaginate
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className={classes.paginationBttns}
      previousClassName={classes.previousBttn}
      nextClassName={classes.nextBttn}
      activeClassName={classes.paginationActive}
      disabledClassName={classes.paginationDisabled}
    />
      </div>
  );
};

export default Paginate;
