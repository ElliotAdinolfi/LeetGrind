import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LeetGrind</title>
        <meta name="description" content="LeetGrind, an application for learning JavaScript and algorithms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
    </div>
  )
};

export default Home;
