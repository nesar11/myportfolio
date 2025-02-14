'use client';

import React, { useState, useEffect } from 'react';
import styles from './Slide.module.scss';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slides array with specific overlay content for each slide
  const slides = [
    {
      image: '/assets/images/slides/slide003.webp',
      title: 'Showcasing Full Stack Development Expertise',
      description: `Demonstrating proficiency in front-end and back-end 
      technologies to build dynamic and robust applications.`
    },
    {
      image: '/assets/images/slides/slide00.png',
      title: 'Building Scalable and High-Performance Web Applications',
      description: `Developing scalable, high-performance solutions optimized 
      for user experience and business growth.`
    },
   
    {
      image: '/assets/images/slides/slide01.jpg',
      title: 'Innovative Problem-Solving with Cutting-Edge Technology',
      description: `Leveraging modern tools and technologies to create innovative 
      solutions for complex challenges.`
    }
  ];
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000); // 15-second interval

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.slide}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slideItem} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <Image
            src={slide.image}
            alt={`Slide Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          {/* Overlay Content - Only active slide content is displayed */}
          {index === currentSlide && (
            <div className={styles.videoOverlay}>
              <h1 className={styles.videoText}>
                <Typewriter
                  options={{
                    strings: [slide.title],
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h1>
              <p className={styles.videoText}>{slide.description}</p>
              {/* <button className={styles.readMoreButton}>Read more</button> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slide;
