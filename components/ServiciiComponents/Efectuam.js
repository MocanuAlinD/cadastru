import React from "react";
import { Fade } from "react-reveal";
import PreturiLink from "../PreturiLink";

const Efectuam = () => {
  return (
    <div
      className={
        "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
      }
    >
      <Fade top>
        <img
          src="/constantaWide.png"
          alt="tipuri de lucrari"
          className={"m-0 p-0 col-8 col-lg-6"}
        />
      </Fade>
      <Fade bottom delay={200}>
        <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
          &nbsp;&nbsp;<b>Efectuam masuratori</b> in orasul Constanta si intreg
          judetul Constanta dar ne putem deplasa si in judetele alaturate pentru
          anumite lucrari.
        </p>
        <PreturiLink />
      </Fade>
    </div>
  );
};

export default Efectuam;
