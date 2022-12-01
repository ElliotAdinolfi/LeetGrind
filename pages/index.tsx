import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Algo Reps</title>
        <meta name="description" content="LeetGrind, an application for learning JavaScript and algorithms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
        <HomePage />
      {/* <Footer /> */}
    </div>
  )
};

export default Home;
