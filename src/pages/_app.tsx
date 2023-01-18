import 'tailwindcss/tailwind.css';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Habits</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090A" />
        <meta name="description" content="Habit tracker!" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
