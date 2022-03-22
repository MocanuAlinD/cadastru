import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../styles/contact.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className={styles.container + " row col-12 m-0 p-0 py-3 d-flex flex-column justify-content-center"}
      id="contact"
    >
      <h4 className={styles.contactTitle + " text-center p-0 m-0 pb-3 mb-3"}>
        Contact
      </h4>
      {/* <p>orar luni vineri ora start ora sfarsit adresa?</p> */}
      <div className="">
        <Link href="tel: 0751595595">
          <a>
            <LocalPhoneIcon className={styles.contactIcon + " me-2"} />
          </a>
        </Link>
        <h5 className={"me-3"}>0751.595.595</h5>
      </div>
      <div className="">
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
      <div className="">
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
