import styles from '../styles/Section.module.css';
import Checkbox from './Checkbox';

interface SectionProps {
  changeNumDone: (amount: number) => void
}

const Section = (props: SectionProps) => {

  const problem = (
    <div className={styles.problem}>
      <Checkbox changeNumDone={props.changeNumDone}/>
    </div>
  )

  const problems: JSX.Element[] = []
  for(let i = 0; i < 5; i++) {
    problems.push(problem)
  }


  return (
    <div className={styles.outerSection}>
      <span className={styles.title}>{"<"}</span>
      <span className={styles.title}> Test Section </span>
      <span className={styles.title}>{">"}</span>
      <div className={styles.section}>
        {problems}
      </div>
      <span className={styles.title}>{"< /"}</span>
      <span className={styles.title}> Test Section </span>
      <span className={styles.title}>{">"}</span>
    </div>
  )
};

export default Section;