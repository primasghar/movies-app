import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/Button";
import logo from "../../assets/images/logo-64px.png";
import classes from "./Header.module.css";
import NavIcon from "../../shared/Icon/NavIcon";

const Header = () => {
  const [enteredText, setEnteredText] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`search/${enteredText}`);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logoNav}>
          <div className={classes.navIcon}>
      <NavIcon />
          </div>
      <img src={logo} alt={"app logo Icon"} className={classes.logo}></img>
      </div>
      <form className={classes.movieSearch} onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          className={classes.searchBox}
          onChange={changeHandler}
          value={enteredText}
        />
        <Button type="submit">
          <Icon icon={search} size="26" />
        </Button>
      </form>
    </div>
  );
};

export default Header;
