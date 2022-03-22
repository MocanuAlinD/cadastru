import React from "react";
import styles from "../styles/lucrari.module.scss";

const Lucrari = () => {
  return (
      <div className={styles.lucrari + ""}>
        <h3 className={"my-4 text-center"}>Tipuri de lucrari executate</h3>
        <div
          className={
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
          }
        >
          <img
            src="/constantaWide.png"
            alt="tipuri de lucrari"
            className={"m-0 p-0 col-8 col-lg-6"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
            &nbsp;&nbsp;<b>Efectuam masuratori</b> in orasul Constanta si intreg
            judetul Constanta dar ne putem deplasa si in judetele alaturate
            pentru anumite lucrari.
          </p>
        </div>

        <div
          className={
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
          }
        >
          <img
            src="/cadastru.jpeg"
            alt="img1"
            className={"m-0 p-0 col-8 col-lg-6"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
            &nbsp;&nbsp;<b>Lucrari de cadastru si intabulare</b> pentru
            obtinerea numarului cadastral si inscrierea corpurilor de
            proprietate in Cartea Funciara (apartamente, vile, spatii
            comerciale, terenuri aflate in intravilan sau extravilan).
          </p>
        </div>

        <div
          className={
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
          }
        >
          <img
            src="/img1.jpg"
            alt="img1"
            className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
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
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
          }
        >
          <img
            src="/certificatEnergetic.jpeg"
            alt="certificat energetic"
            className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
            &nbsp;&nbsp;<b>Certificat energetic.</b> Un audit energetic al unei
            cladiri reprezintă o analiză ce are rolul de a identifica
            caracteristicile termice ale constructiei. <br />
            &nbsp;&nbsp;Astfel pentru a putea vinde sau închiria o locuinta,
            proprietarul trebuie sa obtina un certificat energetic obligatoriu,
            care atesta starea apartamentului sau casei sale din punctul de
            vedere al consumului de energie. Acest certificat încadreaza
            locuinta într-o clasă energetica, ceea ce denotă un anumit consum
            mediu anual de energie.
          </p>
        </div>

        <div
          className={
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row bg-dark bg-opacity-10"
          }
        >
          <img
            src="/volume.png"
            alt="volume"
            className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
            &nbsp;&nbsp;<b>Calcule volum</b> materiale sau zone excavate /
            exploatate.
          </p>
        </div>

        <div
          className={
            "row m-0 p-0 mb-4 d-flex justify-content-center align-items-center flex-row-reverse bg-dark bg-opacity-10"
          }
        >
          <img
            src="/aerofotogrametrie.jpeg"
            alt="aerofotogrammetrie"
            className={"m-0 p-0 col-8 col-lg-6 p-1 p-lg-0"}
          />
          <p className={"col-12 col-lg-6 mt-2 mt-lg-0"}>
            &nbsp;&nbsp;<b>Aerofotogrammetria</b> (cunoscută și sub denumirea de fotogrammetrie aeriană) este știința care se ocupă cu determinarea în timp și spațiu a obiectelor fixe, mobile sau deformabile și cu reprezentarea lor fotografică, grafică sau numerică (prin coordonate) pe bază de fotografii speciale numite fotograme realizate din aer (cu ajutorul sateliților, avioanelor, drone, e.t.c.).
          </p>
        </div>
      </div>
  );
};

export default Lucrari;
