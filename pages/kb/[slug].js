import Head from 'next/head';
import fetcher from '../../lib/fetcher';
import { getSlugs, getKbSlug } from '../../lib/api';
import kbStyles from '../../styles/Kb.module.scss';

export default function Kb({ singlePage }) {
  return (
    <>
      <Head>
        <title>{singlePage.title}</title>
      </Head>

      <div className={kbStyles.title}>
        <div className="wrapper">
          <h2>{singlePage.title}</h2>
        </div>
      </div>

      <div className={kbStyles.pageWrapper}>
        <div className="wrapper">
          <div dangerouslySetInnerHTML={{ __html: singlePage.content }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetcher(getSlugs);

  const titleSlugs = response.data.kbs.nodes;

  return {
    paths: titleSlugs.map((kb) => `/kb/${kb.slug}`),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const variables = {
    id: params.slug,
  };

  const response = await fetcher(getKbSlug, { variables });

  return {
    props: {
      singlePage: response.data.kb,
    },
  };
};
