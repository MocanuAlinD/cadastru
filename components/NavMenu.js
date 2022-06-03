import Link from "next/link";
import React from "react";
import styles from "../styles/navmenu.module.scss";
import { Fade } from "react-reveal";

const NavMenu = () => {
  return (
      <div
        className={
          styles.navMenu +
          " row position-sticky sticky-top m-0 p-0 mt-md-2 mx-md-auto d-flex justify-content-center align-items-start col-12 col-md-11  shadow"
        }
        style={{ top: ".5rem" }}
      >
        <Link href="/">
          {/* <a className={"links m-0 p-0 mx-1 my-2 px-2"}>Acasa</a> */}
          <a className={"links m-0 p-0 mx-1 my-2 px-2"}><Fade left delay={900}>Acasa</Fade></a>
        </Link>
        <Link href="/servicii">
          <a className={"links m-0 p-0 mx-1 my-2 px-2"}><Fade left delay={750}>Servicii</Fade></a>
        </Link>
        <Link href="/preturi">
          <a className={"links m-0 p-0 mx-1 my-2 px-2"}><Fade left delay={600}>Servicii</Fade></a>
        </Link>
        <Link href="/intrebari">
          <a className={"links m-0 p-0 mx-1 my-2 px-2"}><Fade left delay={450}>Intrebari</Fade></a>
        </Link>
        <Link href="/contact">
          <a className={"links m-0 p-0 mx-1 my-2 px-2"}><Fade left delay={300}>Contact</Fade></a>
        </Link>
      </div>
  );
};

export default NavMenu;
