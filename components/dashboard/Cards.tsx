import styles from '../../styles/Dashboard.module.css';

interface CardGroups {
  group: string
}

const Cards = ({group}: CardGroups) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <div>
          {group}
        </div>
        <div>
        0 / 12
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
};

export default Cards;