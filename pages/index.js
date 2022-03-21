import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Prezentare from "../components/Prezentare";
import Lucrari from "../components/Lucrari";
import Preturi from "../components/Preturi";
import NavMenu from "../components/NavMenu";
import Contact from "../components/Contact";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <div
      className={styles.mainContainer + " container-fluid m-0 p-0"}
      style={{ height: "fit-content", minHeight: "100vh" }}
    >
      <Head>
        <title>Cadastru Constanta</title>
        <meta
          name="description"
          content="cadastru intabulare santier trasare teren terenuri"
        />
        <link rel="icon" href="/titleIcon1.png" />
      </Head>

      {/* <input className={"position-fixed fixed-top mx-auto"} type="checkbox" onChange={() => setColor((prev) => !prev)} /> */}
      <div className={styles.title + " row m-0 p-0"}>
        <h4 className={styles.firstTitle}>Cadastru</h4>
        <h4 className={styles.secondTitle}>Constanta</h4>
        {/* <h4 className={styles.secondTitle}>{color ? "true" : "false"}</h4> */}
      </div>

      <div
        className={
          styles.contentContainer +
          " m-0 p-0 d-flex flex-column flex-lg-row col-12"
        }
      >
        <NavMenu />
        <div
          className={
            styles.sections +
            " row m-0 p-0 mt-3 px-3 mx-lg-auto order-3 order-lg-2"
          }
        >
          <Prezentare />
          <Lucrari />
          <Preturi />
        </div>
        <Contact />
      </div>
    </div>
  );
}
