import Head from 'next/head'
import fetcher from "../lib/fetcher"
import { getLatestFaqs } from '../lib/api'
import Card from '../components/card/Card'
import Search from '../components/search/Search'
import styles from '../styles/Home.module.scss'

export default function Home({ latestFaqs }) {

  return (
    <>
      <Head>
        <title>FAQ Desk</title>
        <meta name="description" content="Help Desk" />
      </Head>


      <main>

        <div className={styles.searchWrapper}>
          <h2>Search articles</h2>
          <Search />

        </div>



        <div className={styles.grid}>

          {latestFaqs.map(faq => {
            return (
              <Card link={"/faq/" + faq.slug} key={faq.id} title={faq.title} excerpt={faq.excerpt} />
            )
          })}

        </div>
      </main>

    </>
  )
}

export async function getStaticProps() {

  const response = await fetcher(getLatestFaqs)

  const latestFaqs = response.data.faqs.nodes

  return {
    props: {
      latestFaqs
    }
  }


}