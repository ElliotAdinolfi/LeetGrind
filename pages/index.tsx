import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LeetGrind</title>
        <meta name="description" content="LeetGrind, an application for learning JavaScript and algorithms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className={styles.sectionContainer}>
        <Section />
      </div>
      <Footer />
    </div>
  )
};

export default Home;
