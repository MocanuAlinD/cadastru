import React from "react";
import styles from "../styles/preturi.module.scss";

const Preturi = () => {
  return (
    <section id="preturi" className={"shadow"}>
      <div className={styles.container}>
        <h3 className={"text-center"}>Preturi</h3>
        {/* <div className={"row col-12 m-0 p-0 border border-dark "}> */}
        <table className={styles.table + " table table-bordered table-light table-hover table-sm"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Serviciu</th>
              <th>Pret (incepand de la)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">-</th>
              <td>Plan situatie pentru CAEC primarie/gaz/enel</td>
              <td>550 lei</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Trasare/tarusare teren intravilan</td>
              <td>350 lei</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Trasare/tarusare teren extravilan</td>
              <td>550 lei</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Cadastru teren</td>
              <td>
                1000 lei <br />+ 350 lei/nivel constructie(releveu interior)
              </td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Cadastru apartament 1-2 camere</td>
              <td>650 lei</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Cadastru apartament 3-4 camere</td>
              <td>750 lei</td>
            </tr>
            <tr className={"table-dark"}>
              <td colspan="3" className={styles.notaSubsol + " text-center"}>
                <sup>*</sup>Preturile NU INCLUD taxele OCPI.
              </td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Preturi;
