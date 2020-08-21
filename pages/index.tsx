import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styled from "styled-components";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justtify-content: center;
  alignitems: center;
  color: black;
  /* background-image: url("/images/yellowfaceheader.png"); */
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  height: 100vh;
`;
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <img src="/images/yellowfaceheader.png" alt="Yellowface" /> */}
        <div className="">
          <Intro>
            <h1>
              Photography. Videography. Facebook Ads. Instagram Ads. Web
              Development.
            </h1>
            <h2>
              Yellowface is a digital marketing agency based in Batam,
              Indonesia. We provide help and solution for clients who want to
              upgrade their online business with services like Product
              Photography, Videography for ads, and setting their Facebook Ads
              and Instagram Ads.
            </h2>
          </Intro>
        </div>
      </section>
      <section>
        <h1>What We Do</h1>
        <div>
          <h2>Branding</h2>
          <p>
            We help businesses designing their brand identity needs such as
            logo, name card, x-banner, catalog, website, etc
          </p>
        </div>
        <div>
          <h2>Content Marketing</h2>
          <p>
            We offer service to plan nd design content for your social media
            account, with caption and hashtag research
          </p>
        </div>
        <div>
          <h2>Google, Facebook, Instagram, and Tik Tok Ads</h2>
          <p>
            We provide service for setting up advertisement on various
            advertisement platform such as Facebook, Instagram, and Google
          </p>
        </div>
      </section>
      <section>
        <h1>Recent Works</h1>
        <div>Photo Concept</div>
        <div>Yearbook Photo Concept</div>
        <div>Yearbook Photo</div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
