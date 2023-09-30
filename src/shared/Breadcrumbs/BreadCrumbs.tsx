import { Link, useParams } from "react-router-dom";

import classes from "./BreadCrumbs.module.css";

type Props = {
  movieName: string;
  // movieType: string;
};
const BreadCrumbs = ({ movieName }: Props) => {
  let { movieType } = useParams();

  return (
    <div className={classes.secondaryNav}>
      <Link to={"/" + movieType}>{movieName.toUpperCase()}</Link>
      {/*<span className={classes.secNav}>{movieName.toUpperCase()}</span>*/}
    </div>
  );
};

export default BreadCrumbs;
