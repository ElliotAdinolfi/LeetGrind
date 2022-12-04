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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className={styles.card} 
      style={qObj && complete === (Object.keys(qObj).length - 1) ? 
      { borderBottom: "6px solid #05c662"} 
      : { borderBottom: "6px solid hsl(300deg, 100%, 50%)"  }}
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
            {complete} / {Object.keys(qObj).length - 1}
          </div>
          : null
        }
      </div>
    </div>
  )
};

export default Cards;