import React from "react";
import { Fade } from "react-reveal";
import PreturiLink from "../PreturiLink";

const Volum = () => {
  return (
    <div
      className={
        "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
      }
    >
      <Fade top>
        <img
          src="/volume.png"
          alt="volume"
          className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
        />
      </Fade>
      <Fade bottom delay={200}>
        <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
          &nbsp;&nbsp;<b>Calcule volum</b> materiale sau zone excavate /
          exploatate.
        </p>
        <PreturiLink />
      </Fade>
    </div>
  );
};

export default Volum;
