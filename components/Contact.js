import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div
      className={
        styles.contact +
        " container-fluid m-0 p-0 mx-auto d-flex flex-wrap justify-content-center align-items-center shadow"
      }
      id="contact"
    >
      <div className={"d-flex flex-wrap p-1"}>
        <LocalPhoneIcon
          className={styles.contactIcon + " d-flex d-sm-none me-3"}
        />
        <h3 className={"mx-2 d-none d-sm-flex"}>Telefon:</h3>
        <h5 className={"me-3"}>0729.927.436</h5>
      </div>
      <div className={"d-flex flex-wrap p-1"}>
        <EmailIcon className={styles.contactIcon + " d-flex d-sm-none me-3"} />
        <h3 className={"mx-2 d-none d-sm-flex"}>Email:</h3>
        <h5>geo.email@yahoo.com</h5>
      </div>
    </div>
  );
};

export default Contact;
