import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import arrowDown from '../public/arrowDown.png'
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

const Nav = () => {

  // const [ style, setStyle ] = useState({ opacity: "0"})

  // const clickedMenu = () => {
  //   setStyle({ opacity: "1" })
  //   setTimeout(() => {
  //     setStyle({ opacity: "0" });
  //   }, 2000);
  // };

  const { data: session } = useSession();

  useEffect(() => {
    if(session) {
      // @ts-ignore
      axios.post('/api/createUser', { user: session?.user.email })
        .then(res => {
          console.log(res);
        })
    }
  }, [session])

  return (
    <div className={styles.navBar}>
      <div className={styles.leftNav}>
        <span className={styles.logo}>{"<"}</span>
        <span className={styles.logo}>Algo</span>
        <span className={styles.logo}>Reps</span>
        <span className={styles.logo}>{">"}</span>
      </div>
      <div className={styles.rightNav}>

        {session ?
          <>
            Signed in as {session.user?.email} <br />
            <div className={styles.signOut} onClick={() => signOut()}>Sign out</div>
          </>
          : 
          <>
            <button className={styles.signIn} onClick={() => signIn()}>Sign in</button>
          </>
          
        }
        {/* <pre className={styles.type}>type </pre>
        <pre className={styles.const}>questions = </pre>
        <div>
          <pre className={styles.menu} onClick={clickedMenu}>
            Grind75 
            <Image 
              src={arrowDown}
              alt="image of an arrow downward"
              width={15}
              height={15}
            />
          </pre>
          <div className={styles.options} style={style}>
            More Coming Soon! 😄
          </div>
        </div> */}
      </div>
    </div>
  )
};

export default Nav;