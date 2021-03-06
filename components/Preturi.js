import React from "react";
import styles from "../styles/preturi.module.scss";
import Fade from "react-reveal/Fade";

const Preturi = () => {
  return (
    <div className={styles.container + " mx-auto"}>
      <h3 className={"text-center mb-4"}>Preturi</h3>
      <table
        className={
          styles.table +
          " table table-bordered table-light table-hover table-sm"
        }
      >
        <thead>
          <Fade top>
            <tr>
              {/* <th>#</th> */}
              <th>Serviciu</th>
              <th>Pret</th>
            </tr>
          </Fade>
        </thead>
        <tbody>
          <Fade bottom cascade>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Consultanta</td>
              <td>GRATUIT</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Plan situatie pentru CAEC primarie/gaz/enel</td>
              <td>550 lei</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Trasare/tarusare teren intravilan</td>
              <td>350 lei</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Trasare/tarusare teren extravilan</td>
              <td>550 lei</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Cadastru teren</td>
              <td>1000 lei + 350 lei/nivel constructie (releveu interior)</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Cadastru apartament 1-2 camere</td>
              <td>650 lei</td>
            </tr>
            <tr>
              {/* <th scope="row">-</th> */}
              <td>Cadastru apartament 3-4 camere</td>
              <td>750 lei</td>
            </tr>
            <tr className={"table-dark"}>
              <td colSpan="2" className={styles.notaSubsol + " text-center"}>
                <sup>*</sup>Preturile NU INCLUD taxele OCPI.
              </td>
            </tr>
          </Fade>
        </tbody>
      </table>
    </div>
  );
};

export default Preturi;
