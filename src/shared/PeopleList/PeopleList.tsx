import React from "react";

import PersonItem from "./PersonItem";
import classes from "../MovieList/MovieList.module.css";

import { Person } from "../../types/personData";

type Props = {
  people: Person[];
};
const PeopleList = ({ people }: Props) => {
  return (
    <div className={classes.wrapper}>
      {people.map((person) => (
        <PersonItem personData={person} key={person.id} />
      ))}
    </div>
  );
};

export default PeopleList;
