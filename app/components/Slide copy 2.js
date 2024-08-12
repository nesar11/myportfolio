'use client';

import React from 'react';
import styles from './Slide.module.scss';
import Typewriter from 'typewriter-effect';

const Slide = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.fullWidthVideo}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/assets/images/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.videoOverlay}>
        <h1 className={styles.videoText}>
          <Typewriter
            options={{
              strings: ['A Global Enterprise in LNG Supply and Commercial Solutions'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.videoText}>As a leading operator in the business, we drive the trifecta of speed, execution and distribution at low cost.</p>
        <button className={styles.readMoreButton}>Read more</button>
      </div>
    </div>
  );
};

export default Slide;
