import styles from '../styles/Problem.module.css';

interface NameProps {
  title: string
  link: string
}

const Name = (props: NameProps) => {
  return (
    <div className={styles.nameContainer}>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <span className={styles.link} >
          {props.title}
        </span>  
      </a>
    </div>
  );
};

export default Name;