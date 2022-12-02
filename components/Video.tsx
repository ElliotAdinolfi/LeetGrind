"use client"

import styles from '../styles/Problem.module.css';
import video from '../public/video.png';
import comingsoon from '../public/comingsoon.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface VideoProps {
  vidLink: string
}

const Video = ({vidLink}: VideoProps) => {
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
    if(!vidLink) {
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
  }, [vidLink]);

  return (
    <div className={styles.videoContainer}>
      {toBeShown}
    </div>
  );
};

export default Video;