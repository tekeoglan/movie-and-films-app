import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=5, minumum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="A prototype for shows-and-films-wep-app."
        />
        <title>Tv-Shows & Films</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
