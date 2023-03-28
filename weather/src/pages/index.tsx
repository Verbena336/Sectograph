import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </>
  );
}
