import React from "react";
import styles from "../styles/certificat.module.scss";

const Certificat = () => {
  return (
    <section id="certificat" className="shadow">
      <div className={styles.container}>
        <h3>Certificat energetic</h3>
        <p>
          &nbsp;&nbsp;Un audit energetic al unei cladiri reprezintă o analiză ce
          are rolul de a identifica caracteristicile termice ale constructiei.
        </p>
        <p>
          &nbsp;&nbsp;Astfel pentru a putea vinde sau închiria o locuinta,
          proprietarul trebuie săa obtina un certificat energetic obligatoriu,
          care atestă starea apartamentului sau casei sale din punctul de vedere
          al consumului de energie. Acest certificat încadreaza locuinta într-o
          clasă energetica, ceea ce denotă un anumit consum mediu anual de
          energie.
        </p>
        <h3>Documente necesare:</h3>
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
    </section>
  );
};

export default Certificat;
