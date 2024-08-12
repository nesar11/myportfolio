'use client'

import React, { useState, useEffect } from 'react';
import styles from './Slide.module.scss';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/images/slides/slide00.png',
    '/assets/images/slides/1slide.png',
    '/assets/images/slides/slide01.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Transition every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // Add slides.length as a dependency

  return (
    <div className={styles.slide}>
      <div className={styles.fullWidthImage}>
        <div className={`${styles.slideImage} ${styles.active}`} style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
          <Image
            src={slides[currentSlide]}
            alt={`Slide Image ${currentSlide + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.videoOverlay}>
        <h1 className={styles.videoText}>
          <Typewriter
            options={{
              strings: ['I AM A FULL STACK DEVELOPER'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.videoText}>I work on both the front-end and back-end with database aspects of web development process agile methodology</p>
        <button className={styles.readMoreButton}>Read more</button>
      </div>
    </div>
  );
};

export default Slide;
