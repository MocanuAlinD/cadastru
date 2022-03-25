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
      <NavMenu />
      <div
        className={
          styles.children +
          " flex-grow-1 my-5 p-1 p-md-2 mx-auto col-11 col-md-10 col-lg-8 col-xl-7 col-xxl-6 shadow-sm"
        }
        style={{}}
      >
        {children}
      </div>
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default Layout;
