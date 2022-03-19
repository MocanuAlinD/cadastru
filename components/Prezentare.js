import React from "react";
import styles from '../styles/prezentare.module.scss'

const Prezentare = () => {
  return (
    <section id="prezentare" className={"shadow"}>
      <div className={styles.container}>
        <h3>Despre noi</h3>
        <p>
          &nbsp;&nbsp;Va oferim servicii de cadastru si intabulare pentru
          apartamente terenuri si constructii in Municipiul Constanta, cat si in
          judetul Constanta.
          <br />
          &nbsp;&nbsp;Pe langa serviciile de cadastru si intabulare,
          executam si lucrari pentru alipirea sau dezmembrarea terenurilor
          agrare sau curti constructii, precum si identificarea si trasarea
          limitelor de proprietate.
          <br />
          &nbsp;&nbsp;Trasarea sau intarusarea terenului este necesara pentru
          localizarea si identificarea exacta a limitelor de proprietate.
          Aceasta operatiune este indicata sa se efectueze in momentul in care
          se doreste achizitionarea unui teren, oferindu-va siguranta ca terenul
          indicat este chiar cel din acte.
           <br />
          &nbsp;&nbsp;De asemenea va punem la dispozitie informatiile necesare
          pentru intabularea apartamentelor si terenurilor in cartea funciara,
          cu ajutorul careia veti putea tranzactiona sau ipoteca imobilele
          respective.
        </p>
      </div>
      <div className={styles.container}>
        <h3>Cadastru si intabulare</h3>
        <p>
          &nbsp;&nbsp;Expert cadastru autorizat de O.N.C.G.C Constanta, executa
          documentatii cadastru si intabulare.
        </p>
      </div>
      <div className={styles.container}>
        <h3>Topografie</h3>
        <p>
          &nbsp;&nbsp;Oferim masuratori topografice, masuratori de teren si
          prelucrari de date.
        </p>
      </div>
    </section>
  );
};

export default Prezentare;
