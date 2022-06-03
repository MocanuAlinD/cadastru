import React from "react";
import PreturiLink from "../PreturiLink";
import {Fade} from "react-reveal";

const Lucrari = () => {
  return (
    <div
      className={
        "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
      }
    >
      <Fade top>
        <img
          src="/cadastru.jpeg"
          alt="img1"
          className={"m-0 p-0 col-8 col-lg-6"}
        />
      </Fade>
      <Fade bottom delay={200}>
        <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
          &nbsp;&nbsp;<b>Lucrari de cadastru si intabulare</b> pentru obtinerea
          numarului cadastral si inscrierea corpurilor de proprietate in Cartea
          Funciara (apartamente, vile, spatii comerciale, terenuri aflate in
          intravilan sau extravilan).
        </p>
        <PreturiLink />
      </Fade>
    </div>
  );
};

export default Lucrari;
