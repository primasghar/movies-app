import React from "react";
import { Link } from "react-router-dom";

import classes from "./PersonItem.module.css";

import { Person } from "../../types/personData";

type Props = {
  personData: Person;
};
const PersonItem = ({ personData }: Props) => {
  return (
    <div className={classes.personItem}>
      <Link to={`persondetail/${personData.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${personData.profile_path}`}
          alt="poster"
          width={234}
          height={330}
          className={classes.posterImg}
        />
      </Link>
      <div className={classes.actorName}>
        <Link to={`persondetail/${personData.id}`} className={classes.name}>
          {personData.name}
        </Link>
      </div>
    </div>
  );
};

export default PersonItem;
