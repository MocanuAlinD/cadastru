import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {

  const changeActive = (e) => {
    const all = document.querySelectorAll(".links")
    all.forEach(element => {
      element.classList.remove('active')
      element.style.background = "none"
      element.style.borderLeft = "2px solid var(--color-blue-dark)"
    });
    e.target.classList.add('active')
    e.target.style.background = "var(--color-blue-dark)"
    e.target.style.borderLeft = "2px solid var(--color-orange)"
  }

  return (
    <div
      className={styles.mainContainer + " container-fluid m-0 p-0"}
      style={{ height: "fit-content", minHeight: "100vh" }}
    >
      <Head>
        <title>Cadastru Constanta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/titleIcon1.png" />
      </Head>

      <div className={styles.title + " row m-0 p-0"}>
        <h4 className={styles.firstTitle}>Cadastru</h4>
        <h4 className={styles.secondTitle}>Constanta</h4>
      </div>

      <div
        className={
          styles.contentContainer +
          " d-flex flex-wrap flex-column flex-md-row justify-content-md-between align-items-md-start justify-content-start align-items-center m-0 p-0 px-2"
        }
      >
        <div
          className={
            styles.navMenu +
            " row position-sticky sticky-top m-0 p-0 d-flex flex-md-column justify-content-start align-items-start col-12 col-md-auto"
          }
        >
          <Link href="#prezentare">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Prezentare</a>
          </Link>
          <Link href="#cadastru">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Cadastru si intabulare</a>
          </Link>
          <Link href="#topografie">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Topografie</a>
          </Link>
          <Link href="#certificat">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Certificat energetic</a>
          </Link>
          <Link href="#preturi">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Preturi</a>
          </Link>
          <Link href="#contact">
            <a className={styles.links + " links m-0 ps-2 my-1 pe-2"} onClick={(e)=>changeActive(e)}>Contact</a>
          </Link>
        </div>

        <div className={"col-12 col-md-7 col-xxl-9"}>
          <section
            id="prezentare"
            className={styles.section + ""}
          >
            <h4>Prezentare</h4>
          </section>
          <section
            id="cadastru"
            className={styles.section + ""}
          >
            <h4>Cadastru</h4>
          </section>
          <section
            id="topografie"
            className={styles.section + ""}
          >
            <h4>Topografie</h4>
          </section>
          <section
            id="certificat"
            className={styles.section + ""}
          >
            <h4>Certificat energetic</h4>
          </section>
          <section
            id="preturi"
            className={styles.section + ""}
          >
            <h4>Preturi</h4>
          </section>
        </div>

        <div className={"col-12 col-md-auto mb-5"} id="contact">
          <h3>Contact</h3>
          <h5>Telefon</h5>
          <h5>Email</h5>
        </div>
      </div>
    </div>
  );
}
