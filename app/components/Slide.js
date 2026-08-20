'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './Slide.module.scss';

const slides = [
  {
    image: '/assets/images/hero/full-stack-workspace.png',
    eyebrow: 'Full Stack Developer',
    title: 'Building reliable business systems from idea to production.',
    description:
      'Over 9 years of experience delivering web apps, dashboards, integrations, APIs, and scalable platforms across real business workflows.',
  },
  {
    image: '/assets/images/hero/business-systems.png',
    eyebrow: 'Product Engineering',
    title: 'Custom software for ordering, booking, POS, property, loans, and operations.',
    description:
      'I design and develop practical systems that help teams manage orders, customers, payments, bookings, projects, and field work with clarity.',
  },
  {
    image: '/assets/images/hero/devops-cloud.png',
    eyebrow: 'DevOps and Delivery',
    title: 'Modern applications built for performance, deployment, and growth.',
    description:
      'From frontend experience to backend architecture, cloud setup, CI/CD, and support, I focus on solutions that stay maintainable after launch.',
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
