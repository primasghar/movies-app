import { Link, useParams } from "react-router-dom";

import classes from "./BreadCrumbs.module.css";

const BreadCrumbs = ({ movieName }) => {
  let { movieType } = useParams();

  return (
    <div className={classes.secondaryNav}>
      <Link to={"/" + movieType}>{movieType.toUpperCase()}</Link>
      <span className={classes.secNav}>{movieName.toUpperCase()}</span>
    </div>
  );
};

export default BreadCrumbs;
