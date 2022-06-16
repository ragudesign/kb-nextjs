import Head from 'next/head';
import fetcher from '../../lib/fetcher';
import { getCats, getCatSlug } from '../../lib/api';
import Card from '../../components/card/Card';
import kbStyles from '../../styles/Kb.module.scss';

export default function categories({ singleCategory }) {
  return (
    <>
      <Head>
        <title>{singleCategory.name}</title>
      </Head>

      <div className={kbStyles.title}>
        <div className="wrapper">
          <h2>{singleCategory.name}</h2>
          <p>Category</p>
        </div>
      </div>

      <div className={kbStyles.pageWrapper}>
        <div className="wrapper">
          {singleCategory.kbs.nodes.map((kb) => {
            return <Card link={'/kb/' + kb.slug} key={kb.id} title={kb.title} excerpt={kb.excerpt} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetcher(getCats);

  const catSlugs = response.data?.kbsTax.nodes;

  return {
    paths: catSlugs.map((cat) => `/categories/${cat.slug}`),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const variables = {
    slug: params.slug,
  };

  const response = await fetcher(getCatSlug, { variables });

  return {
    props: {
      singleCategory: response.data?.kbsTax.nodes[0],
    },
  };
};
