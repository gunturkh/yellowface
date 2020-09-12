import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Projects({ allPostsData }) {
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
          <img
            src="/images/millenial.png"
            alt="Photo Concept"
            style={{ width: 200 }}
          />
        </div>
        <div>
          <h1>Photo Product</h1>
          <p>
            We set up and take various photo for all their products like shoes,
            bag, etc
          </p>
          <img
            src="/images/millenial.png"
            alt="Photo Concept"
            style={{ width: 200 }}
          />
        </div>
        <div>
          <h1>Yearbook Photo</h1>
          <p>
            We plan the concept for High School yearbook photo graduation and
            had a photo session on outdoor
          </p>
          <img
            src="/images/millenial.png"
            alt="Photo Concept"
            style={{ width: 200 }}
          />
        </div>
        <div>
          <h1>FB & IG Ads Marketing</h1>
          <p>
            We helps business to maintain their online presence through Facebook
            & Instagram Advertisement, and responsible from ads concept,
            creation, also audience targetting to ensure maximum efficiency
          </p>
          <img
            src="/images/millenial.png"
            alt="Photo Concept"
            style={{ width: 200 }}
          />
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
