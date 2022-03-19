import React from "react";
import styles from '../styles/cadastru.module.scss'

const Cadastru = () => {
  return (
    <section id="cadastru" className="shadow">
      <div className={styles.container}>
        <h3>Tipuri de lucrari executate</h3>
        <p>
          &nbsp;&nbsp;<b>Efectuam masuratori</b> in orasul Constanta si intreg
          judetul Constanta dar ne putem deplasa si in judetele alaturate pentru
          anumite lucrari:
        </p>
        <p>
          &nbsp;&nbsp;<b>Lucrari de cadastru si intabulare</b> pentru obtinerea
          numarului cadastral si inscrierea corpurilor de proprietate in Cartea
          Funciara (apartamente, vile, spatii comerciale, terenuri aflate in
          intravilan sau extravilan).
        </p>
        <p>
          &nbsp;&nbsp;<b>Dezmembrari, Alipiri, Comasari, Parcelari</b>{" "}
          intabulari constructii si terenuri, documentatii pentru descrierea
          dezmembramintelor (uz, uzufruct, superficie, servitute si abitatie)
          dreptului de proprietate.
        </p>
        <p>
          &nbsp;&nbsp;Lucrarile topografice sunt execuatate in conformitate cu
          legislatia in vigoare si respectand normele emise de Agentia Nationala
          de Cadastru si Publicitate Imobiliara.
        </p>
      </div>
    </section>
  );
};

export default Cadastru;
