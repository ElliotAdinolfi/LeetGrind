"use client"

import { useState } from 'react';
import styles from '../styles/Section.module.css';
import Image from 'next/image';
import checkbox from '../public/checkbox.png';

const Checkbox = () => {

  const [ checked, setChecked ] = useState(false); 

  return (
    <div className={
      checked
      ? styles.statusActive
      : styles.status
      }>
      <div 
      className={styles.statusButton} 
      onClick={() => setChecked(!checked)}
      >
        { checked && 
        <Image 
          src={checkbox}
          alt="checkbox"
          height={17}
          width={17}
        />}
      </div>
    </div>
  )
};

export default Checkbox;
