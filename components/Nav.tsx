import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import arrowDown from '../public/arrowDown.png'
import logo2 from '../public/logo2.png';
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
      axios.post('/api/user', { user: session?.user.email })
        .then(res => {
          console.log(res);
        })
    }
  }, [session])

  return (
    <div className={styles.navBar}>
      <div className={styles.leftNav}>
        <Image 
          className={styles.logo}
          src={logo2}
          alt="image of website logo"
          height={80}
          />
      </div>
      <div className={styles.rightNav}>

        {session ?
          <>
            <div className={styles.email}>Signed in as {session.user?.email}</div><br/>
            <div className={styles.signOut} onClick={() => signOut()}>Sign Out</div>
          </>
          : 
          <>
            <button className={styles.signIn} onClick={() => signIn()}>Sign In / Up</button>
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