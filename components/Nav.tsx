import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import logo2 from '../public/logo2.png';
import account from '../public/account.png';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

const Nav = () => {

  const { data: session } = useSession();
  const [ accountMenu, setAccountMenu ] = useState(false);

  useEffect(() => {
    if(session) {
      // @ts-ignore
      axios.post('/api/user', { user: session?.user.email });
    }
  }, [session]);

  const handleAccountClick = () => {
    setAccountMenu(!accountMenu);
  };

  // {session.user?.email}

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
            {
              accountMenu ?
              <div className={styles.accountMenu}>
                <div>Signed in as {session.user?.email}</div>
                <div onClick={() => signOut()}>Sign Out</div>
              </div>
              : null
            }
            <Image 
            src={account}
            alt="image of account icon"
            width={71}
            height={70}
            onClick={handleAccountClick}
            style={{cursor: "pointer"}}
            />
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