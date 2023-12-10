import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Paginate from "../../shared/Paginate";

import { Person, PeopleData } from "../../types/personData";
import { API_key, Base_URL } from "../../assets/scripts";
import classes from "../../shared/MovieList/MovieList.module.css";

const PopularPeople = () => {
  const [data, setData] = useState<PeopleData | null>(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `${Base_URL}/person/popular?${API_key}&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);

  const handlePageChange = (selectedNumber: { selected: number }) => {
    navigate(`/popularpeople/${selectedNumber.selected + 1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div className={classes.peopleContainer}>
      {data.results.map((person: Person) => (
        <div key={person.id}>
          <p>{person.name}</p>{" "}
        </div>
      ))}
      <Paginate onPageChange={handlePageChange} pageCount={data.total_pages} />
    </div>
  );
};

export default PopularPeople;
