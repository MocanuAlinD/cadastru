import React from "react";
import PreturiLink from "../PreturiLink";
import { Fade } from "react-reveal";

const Dezmembrari = () => {
  return (
    <div
      className={
        "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
      }
    >
      <Fade left exit>
        <img
          src="/img1.jpg"
          alt="img1"
          className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
        />
      </Fade>
      <Fade right delay={200}>
        <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
          &nbsp;&nbsp;
          <b>
            Dezmembrari, alipiri, comasari, parcelari,intabulari constructii si
            terenuri, documentatii
          </b>
          &nbsp;pentru descrierea dezmembramintelor (uz, uzufruct, superficie,
          servitute si abitatie) dreptului de proprietate.
        </p>
        <PreturiLink />
      </Fade>
    </div>
  );
};

export default Dezmembrari;
