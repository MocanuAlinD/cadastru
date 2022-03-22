import Link from "next/link";
import React from "react";
import styles from "../styles/navmenu.module.scss";

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
      className={
        styles.navMenu +
        " row position-sticky sticky-top m-0 p-0 mt-lg-3 ms-lg-3 d-flex flex-lg-column justify-content-center align-items-start col-12 col-lg-auto ps-2 shadow order-1 order-lg-1"
      }
    >
      <Link href="#prezentare">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Info
        </a>
      </Link>
      <Link href="#cadastru">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Servicii
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
      <Link href="/intrebari">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Intrebari
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
