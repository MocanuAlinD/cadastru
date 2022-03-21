import React from "react";
import styles from "../styles/lucrari.module.scss";

const Lucrari = () => {
  return (
    <section id="cadastru" className="shadow">
      <div className={styles.container}>
        <h3 className={"mb-4"}>Tipuri de lucrari executate</h3>
        <div className={styles.imageContainer + ""}>
          <img src="/constantaWide.png" />
          <p className={"clearfix"}>
            &nbsp;&nbsp;<b>Efectuam masuratori</b> in orasul Constanta si intreg
            judetul Constanta dar ne putem deplasa si in judetele alaturate
            pentru anumite lucrari.
          </p>
        </div>

        <div className={"border-start border-dark mb-5 ps-2"}>
          <p>
            &nbsp;&nbsp;<b>Lucrari de cadastru si intabulare</b> pentru
            obtinerea numarului cadastral si inscrierea corpurilor de
            proprietate in Cartea Funciara (apartamente, vile, spatii
            comerciale, terenuri aflate in intravilan sau extravilan).
          </p>
        </div>

        <div className={"border-start border-dark mb-5 ps-2"}>
          <p>
            &nbsp;&nbsp;
            <b>
              Dezmembrari, alipiri, comasari, parcelari,intabulari constructii
              si terenuri, documentatii
            </b>{" "}
            pentru descrierea dezmembramintelor (uz, uzufruct, superficie,
            servitute si abitatie) dreptului de proprietate.
          </p>
          <p>
            &nbsp;&nbsp;Lucrarile topografice sunt execuatate in conformitate cu
            legislatia in vigoare si respectand normele emise de Agentia
            Nationala de Cadastru si Publicitate Imobiliara.
          </p>
        </div>

        <div className={"border-start border-dark mb-5 ps-2"}>
          <p>
            &nbsp;&nbsp;<b>Certificat energetic.</b> Un audit energetic al unei
            cladiri reprezintă o analiză ce are rolul de a identifica
            caracteristicile termice ale constructiei.
          </p>
          <p>
            &nbsp;&nbsp;Astfel pentru a putea vinde sau închiria o locuinta,
            proprietarul trebuie sa obtina un certificat energetic obligatoriu,
            care atestă starea apartamentului sau casei sale din punctul de
            vedere al consumului de energie. Acest certificat încadreaza
            locuinta într-o clasă energetica, ceea ce denotă un anumit consum
            mediu anual de energie.
          </p>
          <p>Documente necesare pentru certificatul energetic:</p>
          <p>
            &nbsp;&nbsp;Pentru realizarea unui audit energetic si obtinerea unui
            certificat energetic pentru o locuinta sunt necesare copii ale
            urmatoarelor documente din cadastru:
          </p>
          <ul>
            <li>Releveul apartamentului sau al casei (scara 1:100).</li>
            <li>Plan de incadrare in zona (scara 1:500).</li>
            <li>Anul construirii locuintei.</li>
            <li>
              O lista a imbunatatirilor efectuate (ex: reabilitare termica,
              calorifere, centrala termica, geamuri termoizolante, etc).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lucrari;
