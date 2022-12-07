import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Nav from '../../components/Nav';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionBlock from '../../components/groups/QuestionBlock';
import { useSession } from 'next-auth/react';

const Groups = () => {

  const { query } = useRouter();
  const [ questions, setQuestions ] = useState<null | JSX.Element[]>(null);
  const [ userData, setUserData ] = useState<null | any>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if(session) {
      axios.get('/api/user', { params: {
        // @ts-ignore
        username: session?.user.email
      }}).then(res => {
        if(!userData) {
          setUserData(res.data);
        }
      });
      axios.get('/api/questions', { params: { group: query.groups }})
        .then(res => {
          const data = res.data[0];
          if(data) {
            // @ts-ignore
            const questionsArray = data[query.groups];
            if(userData) {
              // @ts-ignore
              const userQuestionData = userData[0].topics[query.groups];
              setQuestions(Object.entries(questionsArray).map((element: any) => {
                return <QuestionBlock key={element.id} question={element}  userData={userQuestionData}/>
              }));
            }
          }
        });
    }
  }, [query, session, userData]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Algo Reps</title>
        <meta name="description" content="LeetGrind, an application for learning JavaScript and algorithms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <p style={{fontSize: "2.0rem", margin: "5vh"}} >{"<"} {query.groups} {">"}</p>
      <div className={styles.container}>
        {questions ? questions : null}
      </div>
    </div>
  )
};

export default Groups;
