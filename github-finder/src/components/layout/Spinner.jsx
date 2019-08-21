import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='carga de la pagina'
        style={{ width: "200px", margin: "0 auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
