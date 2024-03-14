import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/Button";
import classes from "./Header.module.css";
import NavIcon from "../../shared/Icon/NavIcon";

type Props = {
  onClickNav: () => void;
};
const Header = ({ onClickNav }: Props) => {
  const [enteredText, setEnteredText] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`search/${enteredText}`);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logoNav}>
        <div className={classes.navIcon} onClick={onClickNav}>
          <NavIcon />
        </div>
        <h1 className={classes.logo}>Show time</h1>
      </div>
      <form onSubmit={submitHandler}>
        <label htmlFor="search" className={classes.searchLabel}>Search bar</label>
        <input
          type="text"
          id="search"
          className={classes.searchBox}
          onChange={handleSearchInput}
          value={enteredText}
        />
        <Button type="submit">
          <Icon icon={search} size="26" />
        </Button>
      </form>
    </header>
  );
};

export default Header;
