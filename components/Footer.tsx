import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftNav}>
        <span className={styles.logo}>{"<"}</span>
        <span className={styles.logo}> /L</span>
        <span className={styles.logo}>G</span>
        <span className={styles.logo}>{">"}</span>
      </div>
      <div className={styles.rightNav}>

      </div>
    </div>
  )
};

export default Nav;