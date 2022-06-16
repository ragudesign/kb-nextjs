import Header from '../components/header/Header';
import NextNprogress from 'nextjs-progressbar';
import fetcher from '../lib/fetcher';
import { getCats } from '../lib/api';
import '../styles/base/base.scss';
import '../styles/base/gutenberg.scss';

function MyApp({ Component, pageProps, kbCats }) {
  return (
    <>
      <NextNprogress color="#0770ef" />
      <Header menu={kbCats} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async () => {
  const response = await fetcher(getCats);

  const kbCats = response.data?.kbsTax.nodes;

  return { kbCats };
};

export default MyApp;
