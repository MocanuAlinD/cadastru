import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={"container-fluid bg-info m-0 p-0"}
      style={{ height: "fit-content", minHeight: "100vh" }}
    >
      <Head>
        <title>Cadastru Constanta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/titleIcon1.png" />
      </Head>

      <div className={styles.title + " row bg-dark m-0 p-0"}>
        <h4 className={styles.firstTitle}>cadastru</h4>
        <h4 className={styles.secondTitle}>intabulare</h4>
      </div>

      {/* <div
        className={styles.contentContainer + 
          " border d-flex flex-wrap flex-column flex-md-row justify-content-md-between align-items-md-start justify-content-start align-items-center"
        }
      > */}

      <div
        className={
          styles.contentContainer +
          " border d-flex flex-wrap flex-column flex-md-row justify-content-md-between align-items-md-start justify-content-start align-items-center m-0 p-0 px-2 px-md-5"
        }
      >
        <div
          className={
            styles.navMenu +
            " row position-sticky sticky-top border m-0 p-0 d-flex flex-md-column px-md-3 justify-content-between align-items-center col-12 col-md-auto"
          }
        >
          <Link href="#id1">
            <a className={"m-0 px-0 my-1"}>Preturi</a>
          </Link>
          <Link href="#id2">
            <a className={"m-0 px-0 my-1"}>Contact</a>
          </Link>
          <Link href="#id3">
            <a className={"m-0 px-0 my-1"}>Section 3</a>
          </Link>
          <Link href="#id4">
            <a className={"m-0 px-0 my-1"}>Section 4</a>
          </Link>
        </div>

        {/* <div className={"bg-success border col-12 col-md-7 flex-grow-1 m-0 p-0"}> */}
        {/* <div
          className={
            "bg-success border d-flex flex-column flex-md-grow-1 col-md-auto m-0 p-0"
          }
        > */}
        <div className={"bg-success border col-12 col-md-7 col-xxl-9"}>
          <section
            id="id1"
            className={styles.section + " border border-danger"}
          >
            <h4>Preturi</h4>
          </section>
          <section
            id="id2"
            className={styles.section + " border border-danger"}
          >
            <h4>Contact</h4>
          </section>
          <section
            id="id3"
            className={styles.section + " border border-danger"}
          >
            <h4>Section 3</h4>
          </section>
          <section
            id="id4"
            className={styles.section + " border border-danger"}
          >
            <h4>Section 4</h4>
          </section>
        </div>

        <div className={"bg-secondary border col-12 col-md-auto"}>
          <h4>Sidebar Right</h4>
        </div>
      </div>
    </div>
  );
}
