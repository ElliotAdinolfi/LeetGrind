"use client"

import styles from '../styles/Problem.module.css';
import video from '../public/video.png';
import comingsoon from '../public/comingsoon.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Video = () => {

  const display: string | null = 'stuff';
  const [ toBeShown, setToBeShown ] = useState(
    <Image 
    className={styles.videoButton}
    src={video}
    alt="picture of a video icon"
    height={60}
    width={60}
    />
  )
  useEffect(() => {
    if(display === null) {
      setToBeShown(
        <>
          <Image 
          src={comingsoon}
          alt="picture of the words 'coming soon'"
          height={40}
          width={40}
          />
        </>
      )
    }
  }, [display]);

  return (
    <div className={styles.videoContainer}>
      {toBeShown}
    </div>
  );
};

export default Video;