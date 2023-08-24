import { useState } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import classes from "./Header.module.css";

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
      <h1 className={classes.logo}>Show Time</h1>
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
