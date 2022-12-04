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
  const [ style, setStyle ] = useState({
    borderBottom: "6px solid hsl(300deg, 100%, 50%)"
  })
  const { data: session } = useSession();

  useEffect(() => {
    axios.get('/api/user', { params: {
      // @ts-ignore
      username: session?.user.email
    }}).then(res => {
      if(res.data[0]) {
        setUserData(res.data[0]);
        setQObj(res.data[0].topics[group]);
        setComplete(res.data[0].topics[group].complete);
      }
    }).then(() => {
      if(qObj && complete === (Object.keys(qObj).length - 1)) {
        setStyle({
          borderBottom: "6px solid #05c662"
        })
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <div className={styles.card} style={style}>
      <div className={styles.cardTitle}>
        <div>
          {group}
        </div>
        { qObj ?
          <div>
            {complete} / {Object.keys(qObj).length - 1}
          </div>
          : null
        }
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
};

export default Cards;