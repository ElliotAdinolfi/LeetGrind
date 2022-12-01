import styles from '../styles/StatusBar.module.css';

interface StatusBarProps {
  numDone: number
  total: number
}

const StatusBar = ({ numDone, total }: StatusBarProps) => {

  const percent = Math.floor(((numDone / total) * 50));

  return (
    <div className={styles.statusContainer}>
      <div className={styles.fullBar}> 
        <div className={styles.doneBar} style={{ width: `${percent}vh` }}>

        </div>
      </div>
    </div>
  )
};

export default StatusBar;
