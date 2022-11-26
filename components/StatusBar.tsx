import styles from '../styles/StatusBar.module.css';

interface StatusBarProps {
  numDone: number
}

const StatusBar = ({ numDone }: StatusBarProps) => {

  const percent = Math.floor(((numDone / 10) * 70));
  console.log(percent)

  return (
    <div className={styles.statusContainer}>
      <div className={styles.fullBar}> 
        <div className={styles.doneBar} style={{ height: `${percent}vh` }}>

        </div>
      </div>
    </div>
  )
};

export default StatusBar;
