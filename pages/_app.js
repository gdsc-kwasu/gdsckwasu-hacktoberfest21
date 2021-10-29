import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Students &mdash; Hacktoberfest</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Students Hacktoberfest" />
        <meta property="og:url" content="https://devillary.netlify.app/" />
        <meta
          property="og:description"
          content="This project is basically a student-developer profile viewer, 
          where students can contribute by submitting a pull request with their profile details. 
          It's being developed to give students a basic introduction to open source contribution 
          in the period of hacktoberfest."
        />
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
  );
}

export default MyApp;
