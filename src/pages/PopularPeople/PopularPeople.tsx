import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Paginate from "../../shared/Paginate";

import { PeopleData } from "../../types/personData";
import { API_key, Base_URL } from "../../assets/scripts";

import PeopleList from "../../shared/PeopleList/PeopleList";

const PopularPeople = () => {
  const [data, setData] = useState<PeopleData | null>(null);

  let { currentPage } = useParams();
  const navigate = useNavigate();

  const URL = `${Base_URL}/person/popular?${API_key}&language=en-US&page=${currentPage}`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data));
  }, [URL, currentPage]);
  console.log(data);
  const handlePageChange = (selectedNumber: { selected: number }) => {
    navigate(`/popularpeople/${selectedNumber.selected + 1}`);
  };

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <PeopleList people={data.results} />
      <Paginate onPageChange={handlePageChange} pageCount={data.total_pages} />
    </div>
  );
};

export default PopularPeople;
