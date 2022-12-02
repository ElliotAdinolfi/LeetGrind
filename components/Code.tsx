import styles from '../styles/Problem.module.css';
import Image from 'next/image';
import javascript from '../public/javascript.png';
import typescript from '../public/typescript.png';

interface CodeProps {
  solutions: string;
}

const Code = ({ solutions }: CodeProps) => {
  return (
    <div className={styles.codeContainer}>
      <div className={styles.jsbutton}>
        <p>JavaScript</p>
        <Image 
        src={javascript}
        alt="Picture of JavaScript logo"
        height={25}
        width={25}
        />
      </div>
      <div className={styles.tsbutton}>
        <p>TypeScript</p>
        <Image 
        src={typescript}
        alt="Picture of JavaScript logo"
        height={25}
        width={25}
        />
      </div>
    </div>
  );
};

export default Code;