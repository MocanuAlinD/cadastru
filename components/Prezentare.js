import React from "react";
import styles from "../styles/prezentare.module.scss";
import Link from "next/link";

const Prezentare = () => {
  return (
    <div className={styles.prezentare + " container-fluid mx-auto m-0 p-0"}>
      <h3 className={""}>Despre noi</h3>
      <div
        className={
          "d-flex flex-column flex-md-row justify-content-center align-items-center"
        }
      >
        <img className={"col-12 col-md-6"} src="/gps.jpg" alt="Prezentare" />
        <p className="col-12 col-md-6 px-2">
          &nbsp;&nbsp;Serviciile noastre va sunt oferite in Municipiul
          Constanta, cat si in judetul Constanta.
        </p>
      </div>
      <h3 className="ps-2">Ce va oferim:</h3>
      <ul className=" m-0 p-0 px-5 mb-3">
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
      </ul>
    </div>
  );
};

export default Prezentare;
