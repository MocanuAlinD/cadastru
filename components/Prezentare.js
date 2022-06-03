import React from "react";
import { Fade } from "react-reveal";
import styles from "../styles/prezentare.module.scss";

const Prezentare = () => {
  return (
    <div className={styles.prezentare + " container-fluid mx-auto m-0 p-0"}>
      <Fade top>
        <h3 className={"text-center fs-4"}>Despre noi</h3>
      </Fade>
      <div
        className={
          "d-flex flex-column flex-md-row justify-content-center align-items-center"
        }
      >
        <Fade top>
          <img className={"col-12 col-md-6"} src="/gps.jpg" alt="Prezentare" />
        </Fade>
        <Fade bottom delay={300}>
          <p className="col-12 col-md-6 px-2">
            &nbsp;&nbsp;Serviciile noastre va sunt oferite in Municipiul
            Constanta, cat si in judetul Constanta.
          </p>
        </Fade>
      </div>
      <h3 className="ps-2 fs-4">Ce va oferim:</h3>
      <ul className=" m-0 p-0 ms-4 px-1 mb-4">
        <Fade left cascade opposite>
          <li>Consultanta gratuita</li>
          <li>Plan de situatie pentru CAEC primarie/gaz/enel</li>
          <li>Trasare / tarusare teren intravilan</li>
          <li>Trasare / tarusare teren extravilan</li>
          <li>
            Trasari de santier (axe constructii, cota &quot;0&quot;) conform
            proiect
          </li>
          <li>Aviz OCPI pentru autorizatii construire</li>
          <li>Cadastru si intabulare terenuri</li>
          <li>Cadastru si intabulare apartamente</li>
          <li>Actualizari</li>
          <li>Dezmembrari</li>
          <li>Alipiri</li>
          <li>Apartamentari</li>
          <li>Certificat energetic</li>
          <li>Aerofotogrammetrie</li>
          <li>Calcule volum materiale sau zone excavate/exploatate</li>
        </Fade>
      </ul>
    </div>
  );
};

export default Prezentare;
