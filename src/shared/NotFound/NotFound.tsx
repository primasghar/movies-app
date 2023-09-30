import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <p className={classes.noPage}>Sorry! Page Not Found</p>
      <p className={classes.linkToHome}>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
