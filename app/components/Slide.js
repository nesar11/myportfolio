'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './Slide.module.scss';

const slides = [
  {
    image: '/assets/images/hero/full-stack-workspace.png',
    eyebrow: 'Full Stack Engineer',
    title: 'Nesar Uddin',
    description:
      'Node.js, Next.js, React and MERN Stack specialist building scalable SaaS, ERP, POS, hospitality, cloud and DevOps solutions.',
  },
  {
    image: '/assets/images/hero/business-systems.png',
    eyebrow: 'Product Engineering',
    title: 'Business Software',
    description:
      'Custom systems for POS, ordering, booking, property, loans, and operations.',
  },
  {
    image: '/assets/images/hero/devops-cloud.png',
    eyebrow: 'DevOps and Delivery',
    title: 'Cloud Ready Apps',
    description:
      'Frontend, backend, APIs, deployment, and support from one reliable delivery flow.',
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (nextIndex) => {
    setCurrentSlide((nextIndex + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className={styles.slide} aria-label="Portfolio introduction">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`${styles.slideItem} ${index === currentSlide ? styles.active : ''}`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.slideImage}
          />
        </div>
      ))}

      <div className={styles.contentWrap}>
        <div className={styles.videoOverlay}>
          <span>{slides[currentSlide].eyebrow}</span>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <div className={styles.heroActions}>
            <a href="#gallery">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        {currentSlide === 0 && (
          <div className={styles.profileShowcase} aria-label="Nesar Uddin profile photo">
            <div className={styles.profileRing}>
              <Image
                src="/assets/images/me.png"
                alt="Nesar Uddin"
                width={420}
                height={420}
                priority
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileBadge}>
              <strong>Full Stack Developer</strong>
              <span>DevOps | UI & UX | Product Builder</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.controls} aria-label="Slide controls">
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => goToSlide(currentSlide - 1)}
          aria-label="Previous slide"
        >
          <FiArrowLeft aria-hidden="true" />
        </button>

        <div className={styles.dots}>
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={index === currentSlide ? styles.activeDot : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => goToSlide(currentSlide + 1)}
          aria-label="Next slide"
        >
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Slide;
