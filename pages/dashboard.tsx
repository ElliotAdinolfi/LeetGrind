import Head from 'next/head';
import styles from '../styles/Dashboard.module.css';
import Nav from '../components/Nav';
import Cards from '../components/dashboard/Cards';
import axios, { AxiosResponse } from 'axios';
import { topics } from '../variables/variables'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const Dashboard = () => {

  const [ cardGroups, setCardGroups ] = useState(topics);
  const [ cardArray, setCardArray ] = useState<null | JSX.Element[]>(null);
  const [ userData, setUserData ] = useState<null | AxiosResponse>(null);
  const { data: session } = useSession();

  useEffect(() => {
    setCardArray(cardGroups.map(element => {
      return <Cards key={element} group={element}/>
    }));
    axios.get('/api/user', { params: {
      // @ts-ignore
      username: session?.user.email
    }}).then(res => {
      setUserData(res.data);
      // console.log(res.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardGroups, session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Algo Reps</title>
        <meta name="description" content="LeetGrind, an application for learning JavaScript and algorithms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className={styles.main}>
        {cardArray ? cardArray : null}
      </div>
    </div>
  )
};

export default Dashboard;