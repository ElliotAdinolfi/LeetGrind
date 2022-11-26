import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Section from './Section';
import StatusBar from './StatusBar';

const HomePage = () => {

  const [ numDone, setNumDone ] = useState(0);
  
  const changeNumDone = (amount:number) => {
    const newNum = numDone + amount;
    setNumDone(newNum);
  };

  return (
    <div className={styles.sectionContainer}>
      <StatusBar numDone={numDone} />
      <Section changeNumDone={changeNumDone}/>
      <Section changeNumDone={changeNumDone}/>
    </div>
  )
};

export default HomePage;
