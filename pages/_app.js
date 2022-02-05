import Header from '../components/header/Header'
import NextNprogress from 'nextjs-progressbar';
import '../styles/base/base.scss'
import '../styles/base/gutenberg.scss'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNprogress color="#0770ef" />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp