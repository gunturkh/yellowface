import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ marginRight: "auto" }}>
        <Link href="/">Yellowface</Link>
      </div>
      <div style={{ margin: 5 }}>
        <Link href="/about">About</Link>
      </div>
      <div style={{ margin: 5 }}>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}
