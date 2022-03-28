import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from "../styles/contact.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className={styles.container + " row col-12 m-0 p-0 py-3 d-flex flex-column justify-content-center align-items-center"}
      id="contact"
    >
      <h4 className={styles.contactTitle + " text-center m-0 p-0 w-auto mx-auto px-5 py-1 mb-3 d-flex justify-content-center flex-column "}>
        Contact
      </h4>
      <div>
        <AccessTimeIcon className={styles.contactIcon + " me-2"} />
        <h5>Luni - Vineri &nbsp;&nbsp; 8.00 - 16.00</h5>
      </div>
      <div>
        <Link href="tel: 0751595595">
          <a>
            <LocalPhoneIcon className={styles.contactIcon + " me-2"} />
          </a>
        </Link>
        <h5 className={"me-3"}>0751.595.595</h5>
      </div>
      <div>
        <Link href="mailto: cartotopo.survey@gmail.com?subject=Doresc mai multe detalii.">
          <a>
            <EmailIcon
              url="https://google.com"
              className={styles.contactIcon + " me-2"}
            />
          </a>
        </Link>
        <h5>cartotopo.survey@gmail.com</h5>
      </div>
      <div>
        <Link href="">
          <a>
            <FacebookIcon
              url="https://facebook.com"
              className={styles.contactIcon + " me-2"}
            />
          </a>
        </Link>
        <h5>/cartotopo.survey</h5>
      </div>
    </div>
  );
};

export default Contact;
