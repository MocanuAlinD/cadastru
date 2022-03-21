import React from "react";
import styles from "../styles/sections.module.scss";

const Lucrari = () => {
  return (
    <section id="cadastru">
      <div className={styles.container}>
        <h3 className={"mb-4"}>Tipuri de lucrari executate</h3>
        <div
          className={
            styles.imageContainer + " border-start border-dark mb-5 ps-2"
          }
        >
          <img src="/constantaWide.png" alt="tipuri de lucrari" />
          <p className={"clearfix"}>
            &nbsp;&nbsp;<b>Efectuam masuratori</b> in orasul Constanta si intreg
            judetul Constanta dar ne putem deplasa si in judetele alaturate
            pentru anumite lucrari.
          </p>
        </div>

        <div
          className={
            styles.imageContainer + " border-start border-dark mb-5 ps-2"
          }
        >
          <img src="/img1.jpg" alt="img1" style={{ float: "right" }} />
          <p className={"clearfix"}>
            &nbsp;&nbsp;<b>Lucrari de cadastru si intabulare</b> pentru
            obtinerea numarului cadastral si inscrierea corpurilor de
            proprietate in Cartea Funciara (apartamente, vile, spatii
            comerciale, terenuri aflate in intravilan sau extravilan).
          </p>
        </div>

        <div
          className={
            styles.imageContainer + " border-start border-dark mb-5 ps-2"
          }
        >
          <img src="/img1.jpg" alt="img1" />
          <p className={"clearfix"}>
            &nbsp;&nbsp;
            <b>
              Dezmembrari, alipiri, comasari, parcelari,intabulari constructii
              si terenuri, documentatii
            </b>
            &nbsp;pentru descrierea dezmembramintelor (uz, uzufruct, superficie,
            servitute si abitatie) dreptului de proprietate.
          </p>
        </div>

        <div
          className={
            styles.imageContainer + " border-start border-dark mb-5 ps-2"
          }
        >
          <img src="/img1.jpg" alt="img1" style={{ float: "right" }} />
          <p className={"clearfix"}>
            &nbsp;&nbsp;<b>Certificat energetic.</b> Un audit energetic al unei
            cladiri reprezintă o analiză ce are rolul de a identifica
            caracteristicile termice ale constructiei. <br />
            &nbsp;&nbsp;Astfel pentru a putea vinde sau închiria o locuinta,
            proprietarul trebuie sa obtina un certificat energetic obligatoriu,
            care atestă starea apartamentului sau casei sale din punctul de
            vedere al consumului de energie. Acest certificat încadreaza
            locuinta într-o clasă energetica, ceea ce denotă un anumit consum
            mediu anual de energie.
          </p>
        </div>
        <div
          className={
            styles.imageContainer + " border-start border-dark mb-5 ps-2"
          }
        >
          <img src="/volume.png" alt="volume" />
          <p className={"clearfix"}>
            &nbsp;&nbsp;<b>Calcule volum</b> materiale sau zone excavate /
            exploatate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Lucrari;
