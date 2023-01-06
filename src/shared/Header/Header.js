import { useRef } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import classes from "./Header.module.css";

const Header = () => {
  const searchInputRef = useRef("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredText = searchInputRef.current.value;

    console.log("clicked");
    navigate(`search/${enteredText}`);
    // searchInputRef.current.value = "";
  };

  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>Show Time</h1>

      <form className={classes.movieSearch} onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          className={classes.searchBox}
          ref={searchInputRef}
        />
        <Button type="submit">
          <Icon icon={search} size="26" />
        </Button>
      </form>
    </div>
  );
};

export default Header;
