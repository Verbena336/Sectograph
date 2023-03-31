import Head from 'next/head';

import Header from '@/components/Header';
import Weather from '@/components/Weather';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <Weather />
    </>
  );
}
