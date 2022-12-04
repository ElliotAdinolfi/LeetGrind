import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import arrowDown from '../public/arrowDown.png'
import logo2 from '../public/logo2.png';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

const Nav = () => {

  const { data: session } = useSession();

  useEffect(() => {
    if(session) {
      // @ts-ignore
      axios.post('/api/user', { user: session?.user.email });
    }
  }, [session]);

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
      </div>
    </div>
  )
};

export default Nav;