import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Students &mdash; Hacktoberfest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Link href="https://github.com/kwasu-ng/gdsckwasu-hacktoberfest21">
        <a
          className="github-fork-ribbon"
          data-ribbon="Fork me on GitHub"
          target="_blank"
        ></a>
      </Link>
    </>
  )
}

export default MyApp
