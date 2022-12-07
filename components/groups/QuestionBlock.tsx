import styles from '../../styles/QBlock.module.css';
import { useEffect, useState } from 'react';

interface QuestionBlockProps {
  question: any[]
  userData: {};
}

const QuestionBlock = ({question, userData}: QuestionBlockProps) => {

  // @ts-ignore
  const [ title, setTitle ] = useState<string>(question[0]);
  // @ts-ignore
  const [ reps, setReps ] = useState<number>(userData[title]);
  const [ shadow, setShadow ] = useState("3px 3px 5px 0 #05c662");
  const [ difficulty, setDifficulty ] = useState<string>("3px solid rgb(16 185 129)");
 
  useEffect(() => {
    setShadow(reps > 0
    ? "4px 4px 5px 0 #05c662"
    : "4px 4px 5px 0 hsl(300deg, 90%, 50%)");
  }, [reps]);

  return (
    <div className={styles.container} 
      style={{boxShadow: shadow, transition: ".3s"}}>
      <div className={styles.difficulty} >
        <div className={styles.reps}>
          <p>{reps}</p>
        </div>
      </div>
      <div className={styles.name}>
        <a href={question[1].link} target='_blank' rel="noreferrer">{title}</a>
      </div>
      <div className={styles.buttons}>

      </div>
    </div>
  )
};

export default QuestionBlock;
