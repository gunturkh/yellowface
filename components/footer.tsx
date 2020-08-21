import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #eaeaea",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ flex: "0 1 50%" }}>
        <div>Let's Work Together</div>
        <div>
          Want to collaborate with us? Have something to ask? You can reach us
          by email or through list of contact below.
        </div>
        <div>Office: Ruko Golden Land Blok L No. 3A Batam Centre</div>
        <div>Email: hi@yellowface.co.id</div>
        <div>Instagrram : @yellowface.co @millenial.yellowface</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: "0 1 50%",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("form submit");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: "0 1 50%",
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            style={{
              padding: 5,
              margin: 5,
              border: "1px solid gray",
              borderRadius: 5,
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Your@email.com"
            style={{
              padding: 5,
              margin: 5,
              border: "1px solid gray",
              borderRadius: 5,
            }}
          />
          <input
            name="text"
            type="text"
            placeholder="Your question/requirement"
            style={{
              padding: 5,
              margin: 5,
              border: "1px solid gray",
              borderRadius: 5,
            }}
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    </footer>
  );
}
