import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

const name = "Yellowface";
export const siteTitle = "Yellowface";

export default function Layout({ children, home }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <link
            rel="shortcut icon"
            href="/favicon-black.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/favicon-black.ico" type="image/x-icon" />
          <style>
            @import
            {/* url('https://fonts.googleapis.com/css2?family=Alata&family=Open+Sans:wght@300;400&display=swap'); */}
            url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitter:wght@400;700&family=Righteous&display=swap');
          </style>
          <meta
            name="description"
            content="Design Graphic, Social Media Content, and Digital Marketing Agency in Batam, Indonesia"
          />
          {/* <meta property="og:title" content="The Rock" /> */}
          {/* <meta property="og:type" content="video.movie" /> */}
          {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
          <meta property="og:image" content="/yellowface.png" />
          {/* <meta */}
          {/*   property="og:image" */}
          {/*   content={`https://og-image.now.sh/${encodeURI( */}
          {/*     siteTitle */}
          {/*   )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} */}
          {/* /> */}
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
