import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent,
} from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";

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
        src="/images/VENOM-1.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-2.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-3.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-4.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-5.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-6.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-7.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-8.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
      <img
        src="/images/VENOM-9.jpg"
        alt="Photo Product"
        style={{ maxHeight: 200 }}
      />
    </Flicking>
  );
};
export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>Projects</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>Projects</section> */}
      <div style={{ padding: 20 }}>
        <div>
          <h1>Social Media Content Creation</h1>
          <p>
            Responsible for planning all their social media content start from
            concept planning, copywriting, and hashtag research.
          </p>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
            }}
          >
            <img
              src="/images/bprsatya-ig.png"
              alt="Photo Concept"
              style={{ width: 200 }}
            />
            <img
              src="/images/ug-ig.png"
              alt="Photo Concept"
              style={{ width: 200 }}
            />
            <img
              src="/images/bpd-ig.png"
              alt="Photo Concept"
              style={{ width: 200 }}
            />
          </div>
        </div>
        <div>
          <h1>Photo Product</h1>
          <p>
            We set up and take various photo of client's product for their social media and e-commerce website needs.
          </p>
          {/* {Carousel()} */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              justifyItems: "center",
              /* flexFlow: "row wrap", */
              /* justifyContent: "center", */
            }}
          >
            <img
              src="/images/VENOM-7.jpg"
              alt="Photo Product"
              style={{ maxHeight: 200 }}
            />
            <img
              src="/images/VENOM-8.jpg"
              alt="Photo Product"
              style={{ maxHeight: 200 }}
            />
            <img
              src="/images/VENOM-9.jpg"
              alt="Photo Product"
              style={{ maxHeight: 200 }}
            />
          </div>
        </div>
        <div>
          <h1>Yearbook Photo</h1>
          <p>
            We plan the concept for High School yearbook photo graduation and
            had a photo session on outdoor
          </p>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
            }}
          >
            <img
              src="/images/millenial.png"
              alt="Photo Concept"
              style={{ width: 200 }}
            />
            <img
              src="/images/millenial2.png"
              alt="Yearbook Concept"
              style={{ width: 200 }}
            />
            <img
              src="/images/millenial3.png"
              alt="Yearbook Photo"
              style={{ width: 200 }}
            />
          </div>
        </div>
        <div>
          <h1>FB & IG Ads Marketing</h1>
          <p>
            We helps business to maintain their online presence through Facebook
            & Instagram Advertisement, and responsible from ads concept,
            creation, also audience targetting to ensure maximum efficiency
          </p>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
            }}
          >
            <img
              src="/images/ads1.png"
              alt="Facebook Ads"
              style={{ width: 200 }}
            />
            <img
              src="/images/ads2.png"
              alt="Facebook Ads"
              style={{ width: 200 }}
            />
            <img
              src="/images/ads3.png"
              alt="Facebook Ads"
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
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
