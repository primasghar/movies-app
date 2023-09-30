import React from "react";

import classes from "./Button.module.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
};

const Button = ({ type, children }: Props) => {
  return (
    <button className={classes.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
