'use client'

import React, { useState, useEffect } from 'react';
import styles from './Slide.module.scss';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/images/slide1.jpeg',
    '/assets/images/slide3.jpeg',
    '/assets/images/slide4.jpeg',
    '/assets/images/slide5.jpeg',
    '/assets/images/slide6.webp',
    '/assets/images/slide7.jpeg',
    '/assets/images/slide8.jpeg',
    '/assets/images/slide9.png',
    // Add more slide images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Transition every 10 seconds

    return () => clearInterval(interval);
  }, []);

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
              strings: ['A Global Enterprise in LNG Supply and Commercial Solutions'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.videoText}>As a leading operator in the business, we drive the trifecta of speed, execution and distribution at low</p>
        <button className={styles.readMoreButton}>Read more</button>
      </div>
    </div>
  );
};

export default Slide;
