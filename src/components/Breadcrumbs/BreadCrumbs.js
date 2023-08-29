import { Link, useLocation } from "react-router-dom";

import classes from "./BreadCrumbs.module.css";

const BreadCrumbs = (props) => {
  const location = useLocation();
  console.log(location);

  let link = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      link += `/${crumb}`;
      return (
        <div className={classes.crumb} key={location.key}>
          <Link to={link}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className={classes.secondaryNav}>
      {crumbs}
      <span>{props.movieName}</span>
    </div>
  );
};

export default BreadCrumbs;
