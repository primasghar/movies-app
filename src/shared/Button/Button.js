import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.btn} type={props.type} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
