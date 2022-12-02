import { useEffect, useState } from 'react';
import styles from '../styles/StatusBar.module.css';

interface StatusBarProps {
  numDone: number
  total: number
}

const StatusBar = ({ numDone, total }: StatusBarProps) => {

  const [ percent, setPercent ] = useState(Math.floor(((numDone / total) * 50)))

  useEffect(() => {
    setPercent(Math.floor(((numDone / total) * 50)));
    console.log(percent)
  }, [numDone, percent, total]);

  return (
    <div className={styles.statusContainer}>
      <div className={styles.fullBar}> 
        <div className={styles.doneBar} style={{ width: `${percent}vh`, zIndex: "100" }}>

        </div>
      </div>
    </div>
  )
};

export default StatusBar;
