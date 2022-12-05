import styles from '../../styles/Dashboard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface CardGroups {
  group: string
}

const Cards = ({group}: CardGroups) => {

  const [ userData, setUserData ] = useState(null);
  const [ qObj, setQObj ] = useState<null | {}>(null);
  const [ complete, setComplete ] = useState(null);
  const [ percent, setPercent ] = useState<null | JSX.Element>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if(!userData) {
      axios.get('/api/user', { params: {
        // @ts-ignore
        username: session?.user.email
      }}).then(res => {
        if(res.data[0]) {
          setUserData(res.data[0]);
          const object = res.data[0].topics[group];
          setQObj(object);
          setComplete(object.complete);
          setPercent(
            <div>
              {Math.floor((object.complete / (Object.keys(object).length - 1)) * 100)}% ({object.complete} / {Object.keys(object).length - 1}) complete
            </div>
          );
        };
      });
    };
  }, [group, session, userData]);

  return (
    <div className={styles.card} 
      style={qObj && complete === (Object.keys(qObj).length - 1) ? 
      { borderBottom: "7px solid #05c662"} 
      : { borderBottom: "7px solid hsl(300deg, 100%, 50%)"  }}
    >
      <div className={styles.cardTitle}>
        <div>
          {group}
        </div>
      </div>
      <div>

      </div>
      <div className={styles.cardFoot}>
        {percent}
        <Link href={`/questions/${group}`} className={styles.cardBtn}>
          <p>Get Reps in 💪</p>
        </Link>
      </div>
    </div>
  )
};

export default Cards;