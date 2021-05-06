import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({ postData }) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article style={{ padding: "0 100px"}}>
      <div style={{textAlign: "center"}} >
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.lightText}>
        {postData?.penulis ? `Penulis: ${postData.penulis}` : 'Yellowface'}
        </div>
        {postData?.instagram &&
          (
            <div className={utilStyles.lightText}>
            { `Instagram: ${postData.instagram}` }
            </div>
        )
        }
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params: ", params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
