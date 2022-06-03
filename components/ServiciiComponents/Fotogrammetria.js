import React from "react";
import { Fade } from "react-reveal";
import PreturiLink from "../PreturiLink";

const Fotogrammetria = () => {
  return (
    <div
      className={
        "row m-0 p-0 mb-5 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
      }
    >
      <Fade right>
        <img
          src="/aerofotogrametrie.jpeg"
          alt="aerofotogrammetrie"
          className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
        />
      </Fade>
      <Fade left delay={200}>
        <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
          &nbsp;&nbsp;<b>Aerofotogrammetria</b> (cunoscută și sub denumirea de
          fotogrammetrie aeriană) este știința care se ocupă cu determinarea în
          timp și spațiu a obiectelor fixe, mobile sau deformabile și cu
          reprezentarea lor fotografică, grafică sau numerică (prin coordonate)
          pe bază de fotografii speciale numite fotograme realizate din aer (cu
          ajutorul sateliților, avioanelor, drone, e.t.c.).
        </p>
        <PreturiLink />
      </Fade>
    </div>
  );
};

export default Fotogrammetria;
