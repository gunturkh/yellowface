import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justtify-content: center;
  alignitems: center;
  color: black;
  height: auto;
  max-width: 400px;
`;

const WhatWeDoSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    flex-flow: column;
  }
`;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Intro>
            <h1 className={utilStyles.headingLg}>
              Photography. Videography. Facebook Ads. Instagram Ads. Web
              Development.
            </h1>
            <p
              className={utilStyles.headingSm}
              style={{ fontFamily: "Open Sans" }}
            >
              Yellowface is a digital marketing agency based in Batam,
              Indonesia. We provide help and solution for clients who want to
              upgrade their online business with services like Product
              Photography, Videography for ads, and setting their Facebook Ads
              and Instagram Ads.
            </p>
          </Intro>
          <div>
            <img
              src="/images/on-the-office-animate.svg"
              alt="Yellowface"
              style={{ width: 600 }}
            />
          </div>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h1 className={utilStyles.headingLg}>What We Do</h1>
        <WhatWeDoSection>
          <Card style={{ flex: "1 1 100%", padding: "1rem", margin: "20px" }}>
            <CardContent>
              <img
                src="/images/design-process-3.svg"
                alt="Yellowface"
                style={{ width: 600 }}
              />
              <h2 className={utilStyles.headingMd}>Branding</h2>
              <p className={utilStyles.headingSm}>
                We help businesses designing their brand identity needs such as
                logo, name card, x-banner, catalog, website, etc
              </p>
            </CardContent>
          </Card>
          <Card style={{ flex: "1 1 100%", padding: "1rem", margin: "20px" }}>
            <CardContent>
              <img
                src="/images/mobile-marketing-3.svg"
                alt="Yellowface"
                style={{ width: 600 }}
              />
              <h2 className={utilStyles.headingMd}>Content Marketing</h2>
              <p className={utilStyles.headingSm}>
                We offer service to plan and design content for your social
                media account, with caption and hashtag research
              </p>
            </CardContent>
          </Card>
          <Card style={{ flex: "1 1 100%", padding: "1rem", margin: "20px" }}>
            <CardContent>
              <img
                src="/images/mobile-marketing-1.svg"
                alt="Yellowface"
                style={{ width: 600 }}
              />
              <h2 className={utilStyles.headingMd}>Social Media Ads</h2>
              <p className={utilStyles.headingSm}>
                We provide service for setting up advertisement on various
                advertisement platform such as Facebook, Instagram, and Google
              </p>
            </CardContent>
          </Card>
        </WhatWeDoSection>
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
