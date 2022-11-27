import styles from '../styles/Section.module.css';
import Checkbox from './Checkbox';
import Name from './Name';
import Code from './Code';
import Difficulty from './Difficulty';
import Video from './Video';

interface SectionProps {
  changeNumDone: (amount: number) => void
}

const Section = (props: SectionProps) => {

  const difficulty = "Easy"

  const problem = (
    <div className={styles.problem}>
      <Checkbox changeNumDone={props.changeNumDone}/>
      <Name />
      <Difficulty difficulty={difficulty}/>
      <Video />
      <Code />
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
      <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginTop: "10px"}}>
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
      <span className={styles.title}> Test Section </span>
      <span className={styles.title}>{">"}</span>
    </div>
  )
};

export default Section;