import styles from '../../styles/QBlock.module.css';
import { useEffect, useState } from 'react';

interface QuestionBlockProps {
  question: {};
  userData: {};
}

const QuestionBlock = ({question, userData}: QuestionBlockProps) => {

  // @ts-ignore
  const [ title, setTitle ] = useState<string>(question[0]);
  // @ts-ignore
  const [ reps, setReps ] = useState<number>(userData[title]);
  const [ shadow, setShadow ] = useState("3px 3px 5px 0 #05c662");
 
  useEffect(() => {
    setShadow(reps > 0
    ? "4px 4px 5px 0 #05c662"
    : "4px 4px 5px 0 hsl(300deg, 100%, 50%)");
  }, [reps]);

  return (
    <div className={styles.container} 
      style={{boxShadow: shadow, transition: ".3s"}}>
      <div className={styles.reps}>
        <p>{reps}</p>
      </div>
      <div className={styles.name}>
      </div>
    </div>
  )
};

export default QuestionBlock;
