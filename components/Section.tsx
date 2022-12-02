import styles from '../styles/Section.module.css';
import Checkbox from './Checkbox';
import Name from './Name';
import Code from './Code';
import Difficulty from './Difficulty';
import Video from './Video';
import StatusBar from './StatusBar';
import { useEffect, useState } from 'react';

interface SectionProps {
  name: string
  qArray: []
}

const Section = (props: SectionProps) => {
  
  const [ numDone, setNumDone ] = useState(0);
  const [ problems, setProblems ] = useState<null | JSX.Element[]>(null);

  
  useEffect(() => {
    const changeNumDone = (amount:number) => {
      const newNum = numDone + amount;
      setNumDone(newNum);
    };
    setProblems(Object.keys(props.qArray).map((element:any) => {
      console.log(numDone)
      return (
        // @ts-ignore
      <div key={element} className={styles.problem}>
        <Checkbox changeNumDone={changeNumDone}/>
        {/* @ts-ignore */}
        <Name link={props.qArray[element].link} title={element}/>
        {/* @ts-ignore */}
        <Difficulty difficulty={props.qArray[element].difficulty}/>
        {/* @ts-ignore */}
        <Video vidLink={props.qArray[element].video} />
        {/* @ts-ignore */}
        <Code solutions={props.qArray[element].solution}/>
      </div>
      )
    }));
  }, [numDone, props.qArray])



  return (
    <div className={styles.outerSection}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
        <span className={styles.title}>{"<"} {props.name} {">"}</span>
        <div className={styles.status}>
          <StatusBar numDone={numDone} total={Object.keys(props.qArray).length} />
          <span style={{ fontSize: "1.1rem"}}>{numDone} / 11</span>
        </div>
      </div>
      <div className={styles.labels} style={{display: "flex", flexDirection: "row", textAlign: "center", marginTop: "10px"}}>
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