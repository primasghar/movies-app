import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/Button";
import logo from "../../assets/images/logo-64px.png";
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
        <img src={logo} alt={"app logo Icon"} className={classes.logo}></img>
      </div>
      <form onSubmit={submitHandler}>
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