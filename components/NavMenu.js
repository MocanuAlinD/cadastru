import Link from "next/link";
import React from "react";
import styles from "../styles/navmenu.module.scss"

const NavMenu = () => {
    const changeActive = (e) => {
        const all = document.querySelectorAll(".links");
        all.forEach((element) => {
          element.classList.remove("active");
          element.style.background = "none";
        });
        e.target.classList.add("active");
        e.target.style.background = "var(--color-blue)";
      };
  return (
    <div
      className={styles.navMenu + 
        " row position-sticky sticky-top m-0 p-0 d-flex flex-md-column justify-content-center align-items-start col-12 col-md-auto order-1 order-md-1 my-md-2 ps-2 rounded-3 shadow mt-1"
      }
    >
      <Link href="#prezentare">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Prezentare
        </a>
      </Link>
      <Link href="#cadastru">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Cadastru si intabulare
        </a>
      </Link>
      <Link href="#topografie">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Topografie
        </a>
      </Link>
      <Link href="#certificat">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Certificat energetic
        </a>
      </Link>
      <Link href="#preturi">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Preturi
        </a>
      </Link>
      <Link href="#contact">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Contact
        </a>
      </Link>
    </div>
  );
};

export default NavMenu;
