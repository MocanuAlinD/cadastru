import React from "react";
import styles from "../styles/prezentare.module.scss";
import Image from "next/image";
import Link from "next/link";

const Prezentare = () => {
  return (
    <section id="prezentare" className={"shadow"}>
      <div className={styles.container}>
        <h3 className={"mb-4"}>Despre noi</h3>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/gps.jpg" alt="Prezentare" />
          <p>
            &nbsp;&nbsp;Va oferim servicii de cadastru si intabulare pentru
            apartamente terenuri si constructii in Municipiul Constanta, cat si
            in judetul Constanta.
            <br />
            &nbsp;&nbsp;Pe langa serviciile de cadastru si intabulare, executam
            si lucrari pentru alipirea sau dezmembrarea terenurilor agrare sau
            curti constructii, precum si identificarea si trasarea limitelor de
            proprietate.
            <br />
            &nbsp;&nbsp;Trasarea sau intarusarea terenului este necesara pentru
            localizarea si identificarea exacta a limitelor de proprietate.
            Aceasta operatiune este indicata sa se efectueze in momentul in care
            se doreste achizitionarea unui teren, oferindu-va siguranta ca
            terenul indicat este chiar cel din acte.
            <br />
            &nbsp;&nbsp;De asemenea va punem la dispozitie informatiile necesare
            pentru intabularea apartamentelor si terenurilor in cartea funciara,
            cu ajutorul careia veti putea tranzactiona sau ipoteca imobilele
            respective.
          </p>
        </div>
        <h3>Ce va oferim:</h3>
        <ul>
          <li>Consultanta gratuita</li>
          <li>Plan de situatie pentru CAEC primarie/gaz/enel</li>
          <li>Trasare / tarusare teren intravilan</li>
          <li>Trasare / tarusare teren extravilan</li>
          <li>
            Trasari de santier (axe constructii, cota &quot;0&quot;) conform proiect
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
            <a>aici</a>
          </Link>
          lista de preturi
        </h6>
      </div>
    </section>
  );
};

export default Prezentare;
