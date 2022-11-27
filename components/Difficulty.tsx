import { useEffect, useState } from 'react';
import styles from '../styles/Problem.module.css';

interface DifficultyProps {
  difficulty: string
}

const Difficulty = ({ difficulty }: DifficultyProps) => {

  const [ style, setStyle ] = useState({ color: "black" });

  useEffect(() => {
    if(difficulty === 'Easy') setStyle({ color: "#05954b" })
    else if(difficulty === 'Medium') setStyle({ color: "#c7178c" })
    else if(difficulty === 'Hard') setStyle({ color: "#c7178c" })
  }, [difficulty]);

  return (
    <div className={styles.difficultyContainer} style={style}>
      {difficulty}
    </div>
  );
};

export default Difficulty;