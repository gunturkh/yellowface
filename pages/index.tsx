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
import { GetStaticProps } from "next";
import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent,
} from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";

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

const OurWorksSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    flex-flow: column;
  }
`;

const OurClientSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;

const BlogCardSection = styled.div`
  display: flex;
  flex-flow: row;
  /* min-height: 300px; */
  justify-content: center;
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
`;

const BlogTitle = styled.div`
  &:hover {
    text-decoration: underline;
  }
`

const Carousel = () => {
  /* const handleOnDragStart = (e) => e.preventDefault(); */
  return (
    <Flicking
      tag="div"
      viewportTag="div"
      cameraTag="div"
      onNeedPanel={(e: NeedPanelEvent) => {}}
      onMoveStart={(e: FlickingEvent) => {}}
      onMove={(e: FlickingEvent) => {}}
      onMoveEnd={(e: FlickingEvent) => {}}
      onHoldStart={(e: FlickingEvent) => {}}
      onHoldEnd={(e: FlickingEvent) => {}}
      onRestore={(e: FlickingEvent) => {}}
      onSelect={(e: SelectEvent) => {}}
      onChange={(e: ChangeEvent) => {}}
      deceleration={0.0075}
      horizontal={true}
      circular={true}
      infinite={false}
      infiniteThreshold={0}
      lastIndex={Infinity}
      threshold={40}
      duration={300}
      panelEffect={(x) => 1 - Math.pow(1 - x, 3)}
      defaultIndex={0}
      inputType={["touch", "mouse"]}
      thresholdAngle={45}
      bounce={10}
      autoResize={false}
      adaptive={false}
      zIndex={2000}
      bound={false}
      overflow={false}
      hanger={"50%"}
      anchor={"50%"}
      gap={50}
      moveType={{ type: "snap", count: 1 }}
      collectStatistics={true}
    >
      <img
        src="/images/millenial.png"
        alt="Photo Concept"
        style={{ width: 200 }}
      />
      <img
        src="/images/bprsatya-ig.png"
        alt="BPR Satya Mitra Andalan"
        style={{ width: 200 }}
      />
      <img
        src="/images/bpd-ig.png"
        alt="BPR Dana Putra"
        style={{ width: 200 }}
      />
      <img
        src="/images/ug-ig.png"
        alt="Underground Gaming Store"
        style={{ width: 200 }}
      />
    </Flicking>
  );
};

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
            padding: "0 20px",
            /* backgroundColor: "#f7cd17", */
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
          padding: "0 20px",
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
      <section
        style={{ display: "flex", flexFlow: "column", padding: "0 20px" }}
      >
        <h1>Some Of Our Clients </h1>
        <OurClientSection>
          <img
            src="/images/aston.png"
            alt="Aston Inn Gideon Batam"
            style={{ width: 200 }}
          />
          <img
            src="/images/bdp.jpeg"
            alt="BPR Dana Putra"
            style={{ width: 200 }}
          />
          <img
            src="/images/bluefire.png"
            alt="Bluefire Bar & Resto"
            style={{ width: 200 }}
          />
          <img
            src="/images/satya.png"
            alt="BPR Satya Mitra Andalan"
            style={{ width: 200 }}
          />
          <img
            src="/images/ug.png"
            alt="Underground Game Store"
            style={{ width: 200 }}
          />
        </OurClientSection>
      </section>
      <section
         style={{ display: "flex", flexFlow: "column", padding: "0 20px" }}
      >
        <h1>Our Works</h1>
        {/* {Carousel()} */}
        <OurWorksSection>
          <img
            src="/images/millenial.png"
            alt="Photo Concept"
            style={{ width: 200 }}
          />
          <img
            src="/images/bprsatya-ig.png"
            alt="BPR Satya Mitra Andalan"
            style={{ width: 200 }}
          />
          <img
            src="/images/bpd-ig.png"
            alt="BPR Dana Putra"
            style={{ width: 200 }}
          />
          <img
            src="/images/ug-ig.png"
            alt="Underground Gaming Store"
            style={{ width: 200 }}
          />
          </OurWorksSection>
      </section>
      <section
        className={`${utilStyles.padding1px}`}
        style={{ padding: "0 20px" }}
      >
        <h2>Recent Post</h2>
        <BlogCardSection>
          {allPostsData.map(({ id, date, title }) => (
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                margin: "20px",
                minHeight: 200,
                maxWidth: 300,
              }}
            >
              <CardContent>
                <h5 className={utilStyles.listItem} key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <BlogTitle>{title}</BlogTitle>
                  </Link>
                  <br />
                  <small >
                    <Date dateString={date} />
                  </small>
                </h5>
              </CardContent>
            </Card>
          ))}
        </BlogCardSection>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
