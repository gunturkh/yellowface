import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <nav className={`${styles.headerNav} ${styles.bgColorYellow}`}> */}
      <nav className={`${styles.headerNav}`}>
        <div style={{ margin: "5px auto 5px 5px" }}>
          <Link href="/">
            <img
              src="/images/yellowface-black-logo.png"
              /* className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} */
              alt="Yellowface"
              style={{ width: 200, cursor: "pointer" }}
            />
          </Link>
        </div>
        <div style={{ margin: 5 }}>
          <Link href="/projects">Projects</Link>
        </div>
        {/* <div style={{ margin: 5 }}> */}
        {/*   <Link href="/about">About Us</Link> */}
        {/* </div> */}
      </nav>
    </header>
  );
}
