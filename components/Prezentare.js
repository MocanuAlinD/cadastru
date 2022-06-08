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
            &nbsp;&nbsp;Serviciile noastre vă sunt oferite în Municipiul
            Constanța, cât și în județul Constanța.
          </p>
        </Fade>
      </div>
      <h3 className="ps-2 fs-4">Ce vă oferim:</h3>
      <ul className=" m-0 p-0 ms-4 px-1 mb-4">
        <Fade left cascade>
          <li>Consultanță gratuită</li>
          <li>Plan de situație pentru CAEC primărie/gaz/enel</li>
          <li>Trasare / țărușare teren intravilan</li>
          <li>Trasare / țărușare teren extravilan</li>
          <li>
            Trasări de șantier (axe construcții, cota &quot;0&quot;) conform
            proiect
          </li>
          <li>Aviz OCPI pentru autorizații construire</li>
          <li>Cadastru și intabulare terenuri</li>
          <li>Cadastru și intabulare apartamente</li>
          <li>Actualizări</li>
          <li>Dezmembrări</li>
          <li>Alipiri</li>
          <li>Apartamentări</li>
          <li>Certificat energetic</li>
          <li>Aerofotogrammetrie</li>
          <li>Calcule volum materiale sau zone excavate/exploatate</li>
        </Fade>
      </ul>
    </div>
  );
};

export default Prezentare;
