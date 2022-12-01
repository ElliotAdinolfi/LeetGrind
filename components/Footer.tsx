import styles from '../styles/Nav.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Nav = () => {

  const js = `var groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return [];

    groupWords(words, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

    return [ ...map.values() ];/* Time O(N)               | Space O(N * K) */
};`

  return (
    <div className={styles.footer}>
      <div className={styles.leftNav}>
        <span className={styles.logo}>{"<"}</span>
        <span className={styles.logo}> /Algo</span>
        <span className={styles.logo}>Reps</span>
        <span className={styles.logo}>{">"}</span>
        
      </div>
      <div className={styles.rightNav}>
        <SyntaxHighlighter language='javascript' style={monokai}>
          {js}
        </SyntaxHighlighter>
      </div>
    </div>
  )
};

export default Nav;