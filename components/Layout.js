import React from "react";
import styles from "../styles/layout.module.scss";
import NavMenu from "./NavMenu";
import Contact from "./Contact";

const Layout = ({ children }) => {
  return (
    <div
      className={
        styles.layout + " d-flex flex-column"
      }
    >
      <div className={styles.title + " m-0 p-0"}>
        <h4 className={styles.firstTitle}>Cadastru</h4>
        <h4 className={styles.secondTitle}>Constanta</h4>
      </div>
      {/* <div className={" m-0 p-0 d-flex flex-column col-12"}> */}
      {/* <div className={styles.test + " m-0 p-0"}> */}
      <NavMenu />
      <div
        className={
          styles.children +
          " flex-grow-1 border mx-auto col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6"
        }
        style={{}}
      >
        {children}
      </div>
      {/* <Contact /> */}
      {/* </div> */}
    </div>
  );
};

export default Layout;
