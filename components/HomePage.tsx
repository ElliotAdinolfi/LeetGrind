import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Section from './Section';
import StatusBar from './StatusBar';
import axios from 'axios';
import { getMaxListeners } from 'process';
import { stringify } from 'querystring';

const HomePage = () => {


  const [ qList, setQList ] = useState<any>(null);
  const [ sectionList, setSectionList ] = useState<null | {}[]>(null);

  const getQuestionsFromDB = async () => {
    let list = null;
    try { 
      list = await axios.get('/api/questions');
    } catch (error) {
      console.log(error)
    }
    return list;
  };
 
  useEffect((): any => {
    
    getQuestionsFromDB()
      .then((res: any) => {
          setQList(res.data);
          setSectionList(res.data.map((element: any) => {
            const sectionName = Object.keys(element)[1];
            const qArray = element[sectionName]
            return <Section key={sectionName} name={sectionName} qArray={qArray}/>
          }));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // @ts-ignore
    <div className={styles.sectionContainer}>
      <>
        {sectionList ? sectionList : null}
      </>
    </div>
  )
};

export default HomePage;
