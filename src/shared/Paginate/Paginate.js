import ReactPaginate from "react-paginate";
import classes from "./Paginate.module.css";

const Paginate = ({
  nextLabel,
  onPageChange,
  pageRangeDisplayed,
  previousLabel,
  pageCount,
}) => {
  return (
    <ReactPaginate
      nextLabel={nextLabel}
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel={previousLabel}
      renderOnZeroPageCount={null}
      className={classes.paginationBttns}
      previousClassName={classes.previousBttn}
      nextClassName={classes.nextBttn}
      activeClassName={classes.paginationActive}
      disabledClassName={classes.paginationDisabled}
    />
  );
};

export default Paginate;
