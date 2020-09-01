import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "20px 0",
        borderTop: "1px solid #eaeaea",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        color: "white",
      }}
      className={`${styles.bgColorBlack}`}
    >
      <div style={{ margin: 10 }}>
        <h2 className={utilStyles.headingLg}>Let's Talk</h2>
        <p className={utilStyles.headingSm}>
          Want to collaborate with us? Have something to ask? You can reach us
          by email or through list of contact below.
        </p>
      </div>
      <div style={{ margin: 10 }}>
        <p className={utilStyles.headingSm}>
          Office: Ruko Golden Land Blok L No. 3A Batam Centre
        </p>
      </div>
      <div style={{ margin: 10 }}>
        <p className={utilStyles.headingSm}>Email: hi@yellowface.co.id</p>
      </div>
      <div style={{ margin: 10 }}>
        <p className={utilStyles.headingSm}>
          Office: Ruko Golden Land Blok L No. 3A Batam Centre
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: "0 1 50%",
          margin: "auto",
        }}
      >
        {/*
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
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="name"
            label="What's your name?"
            name="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="What's your email?"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="query"
            label="Tell us what you think!"
            id="query"
          />
          <Button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ed8f03 0%,#ffb75e 100% )",
              borderRadius: 3,
              border: 0,
              color: "white",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            }}
          >
            {" "}
            Submit{" "}
          </Button>
        </form>
          */}
      </div>
    </footer>
  );
}
