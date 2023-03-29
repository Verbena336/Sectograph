import Head from 'next/head';

import Header from '@/components/Header';
import Weather from '@/components/Weather';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Weather />
      </main>
    </>
  );
}
