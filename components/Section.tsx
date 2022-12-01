import styles from '../styles/Section.module.css';
import Checkbox from './Checkbox';
import Name from './Name';
import Code from './Code';
import Difficulty from './Difficulty';
import Video from './Video';
import StatusBar from './StatusBar';
import { useState } from 'react';

interface SectionProps {
  name: string
  qArray: []
}

const Section = (props: SectionProps) => {
  
  const [ numDone, setNumDone ] = useState(0);

  const changeNumDone = (amount:number) => {
    const newNum = numDone + amount;
    setNumDone(newNum);
  };

  const problems = props.qArray.map((element:any) => {
    return (
    <div key={element.title} className={styles.problem}>
      <Checkbox changeNumDone={changeNumDone}/>
      <Name link={element.link} title={element.title}/>
      <Difficulty difficulty={element.difficulty}/>
      <Video />
      <Code />
    </div>
    )
  });


  return (
    <div className={styles.outerSection}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
        <span className={styles.title}>{"<"} {props.name} {">"}</span>
        <span><StatusBar numDone={numDone} total={props.qArray.length} /></span>
        <div>
          <span style={{ fontSize: "1.1rem"}}>{numDone} / 11</span>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginTop: "10px"}}>
        <span style={{ width: "8%" }}>Done</span>
        <span style={{ width: "30%" }}>Title</span>
        <span style={{ width: "15%" }}>Difficulty</span>
        <span style={{ width: "15%" }}>Walkthrough</span>
        <span style={{ width: "32%" }}>Solution</span>
      </div>
      <div className={styles.section}>
        {problems}
      </div>
      <span className={styles.title}>{"< /"}</span>
      <span className={styles.title}> {props.name} </span>
      <span className={styles.title}>{">"}</span>
    </div>
  )
};

export default Section;