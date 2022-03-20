import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div
      // className={
      //   styles.contact +
      //   " container-fluid m-0 p-0 mx-auto d-flex flex-wrap justify-content-center align-items-center shadow"
      // }
      className={
        styles.contact +
        " row col-12 col-lg-auto m-0 p-0 px-3 order-3 order-lg-3 d-flex justify-content-around flex-lg-column mt-lg-3 me-lg-3 p-2 shadow"
      }
      id="contact"
    >
      <div className={"d-flex m-0 p-0 align-items-center"}>
        <LocalPhoneIcon
          className={styles.contactIcon + " me-2"}
        />
        {/* <h3 className={"mx-2 d-none d-sm-flex"}>Telefon:</h3> */}
        <h5 className={"me-3"}>0751.595.595</h5>
      </div>
      <div className={"d-flex m-0 p-0 align-items-center"}>
        <EmailIcon className={styles.contactIcon + " me-2"} />
        {/* <h3 className={"mx-2 d-none d-sm-flex"}>Email:</h3> */}
        <h5>cartotopo.survey@gmail.com</h5>
      </div>
    </div>
  );
};

export default Contact;
