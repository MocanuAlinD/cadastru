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
        " row position-sticky sticky-top m-0 p-0 d-flex justify-content-center align-items-start col-12 ps-2 shadow"
      }
    >
      <Link href="/">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Info
        </a>
      </Link>
      <Link href="/lucrari">
        <a
          className={"links m-0 p-0 mx-1 my-2 px-2"}
          onClick={(e) => changeActive(e)}
        >
          Lucrari
        </a>
      </Link>
      <Link href="/preturi">
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
