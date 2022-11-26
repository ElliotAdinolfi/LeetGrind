"use client"

import { useState } from 'react';
import styles from '../styles/Section.module.css';
import Image from 'next/image';
import checkbox from '../public/checkbox.png';

interface CheckboxProps {
  changeNumDone: (amount: number) => void
}

const Checkbox = (props: CheckboxProps) => {

  const [ checked, setChecked ] = useState(false); 
  const toggleQuestionComplete = () => {
    if(checked) props.changeNumDone(-1)
    else props.changeNumDone(1);
    setChecked(!checked);
  }

  return (
    <div className={
      checked
      ? styles.statusActive
      : styles.status
      }>
      <div 
      className={styles.statusButton} 
      onClick={toggleQuestionComplete}
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
