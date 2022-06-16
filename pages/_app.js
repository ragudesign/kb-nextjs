import Header from '../components/header/Header'
import NextNprogress from 'nextjs-progressbar';
import fetcher from '../lib/fetcher';
import '../styles/base/base.scss'
import '../styles/base/gutenberg.scss'

function MyApp({ Component, pageProps, kbCats }) {

  return (
    <>
      <NextNprogress color="#0770ef" />
      <Header kbCats={kbCats} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp


export async function getStaticProps() {
  const response = await fetcher(getCats);

  const kbCats = response.data.kbsTax.nodes;

return {
  props: {
    kbCats,
  },
};
}
