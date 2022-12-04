import styles from '../../styles/Dashboard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface CardGroups {
  group: string
}

const Cards = ({group}: CardGroups) => {

  const [ userData, setUserData ] = useState(null);
  const [ qObj, setQObj ] = useState<null | {}>(null);
  const [ complete, setComplete ] = useState(null);
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
        }
      });
    }
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
        { qObj ?
          <div>
            {Math.floor(((complete || 0) / (Object.keys(qObj).length - 1)) * 100)}% ({complete} / {Object.keys(qObj).length - 1}) complete
          </div>
          : null
        }
        <div className={styles.cardBtn}>
          <p>Get Reps in 💪</p>
        </div>
      </div>
    </div>
  )
};

export default Cards;