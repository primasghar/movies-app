import ReactPaginate from "react-paginate";

import classes from "./Paginate.module.css";

type Props = {
  onPageChange: (selectedNumber: { selected: number }) => void;
  pageCount: number;
};

const Paginate = ({ onPageChange, pageCount }: Props) => {
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
        activeClassName={classes.paginationActive}
      />
    </div>
  );
};

export default Paginate;
