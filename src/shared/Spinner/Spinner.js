import React from "react";

import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      align="center"
      height="100"
      width="100"
      ariaLabel="loading"
      color="#012a4a"
    />
  );
};

export default Loader;
