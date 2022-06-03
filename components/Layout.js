import React from "react";
import styles from "../styles/layout.module.scss";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout + " d-flex flex-column"}>
      <div className={styles.title + " m-0 p-0"}>
        <Fade top>
          <h4 className={styles.firstTitle}>Cadastru</h4>
        </Fade>
        <Fade bottom   delay={300}>
          <h4 className={styles.secondTitle}>Constanta</h4>
        </Fade>
      </div>

      <NavMenu />
      <div
        className={
          styles.children +
          // " border border-danger flex-grow-1 my-5 p-1 p-md-2 mx-auto col-11 col-md-10 col-lg-8 col-xl-7 col-xxl-6 shadow-sm"
          " flex-grow-1 my-5 p-1 p-md-2 mx-auto col-11 col-xxl-10 shadow-sm"
        }
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
