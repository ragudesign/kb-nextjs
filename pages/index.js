import Head from 'next/head';
import fetcher from '../lib/fetcher';
import { getLatestKbs } from '../lib/api';
import Card from '../components/card/Card';
import Search from '../components/search/Search';
import styles from '../styles/Home.module.scss';

export default function Home({ latestKbs }) {
  return (
    <>
      <Head>
        <title>Knowledge Base</title>
        <meta name="description" content="Knowledge Base" />
      </Head>

      <main>
        <div className={styles.searchWrapper}>
          <div className="wrapper">
            <h2>Knowledge Base</h2>
            <p>Search for all sorts of guides, tips and information</p>
            <Search />
          </div>
        </div>

        <div className="wrapper">
          <div className={styles.grid}>
            {latestKbs.map((kbcat, index) => {
              return (
                <div key={index}>
                  <h3>{kbcat.name}</h3>
                  {kbcat.kbs.nodes.map((kb) => {
                    return <Card link={'/kb/' + kb.slug} key={kb.id} title={kb.title} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetcher(getLatestKbs);

  const latestKbs = response.data.kbsTax.nodes;

  return {
    props: {
      latestKbs,
    },
  };
}
