import React from "react";
import styles from "../styles/sections.module.scss";
import Link from "next/link";

const Prezentare = () => {
  return (
    <section id="prezentare">
      <div className={styles.container}>
        <h3 className={"mb-4"}>Despre noi</h3>
        <div className={"row d-flex justify-content-center align-items-center flex-row mb-4"}>
          <img className={"m-0 p-0 col-12 col-md-6"} src="/gps.jpg" alt="Prezentare" />
          <p className="col-12 col-md-6">
            &nbsp;&nbsp;Serviciile noastre va sunt oferite in Municipiul Constanta, cat si
            in judetul Constanta.
          </p>
        </div>
        <h3>Ce va oferim:</h3>
        <ul>
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
          <li>Aerofotogrametrie</li>
          <li>Calcule volum materiale sau zone excavate/exploatate</li>
        </ul>
        <h6>
          Vezi
          <Link href="#preturi">
            <a> aici </a>
          </Link>
          lista de preturi
        </h6>
      </div>
    </section>
  );
};

export default Prezentare;
