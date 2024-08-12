'use client'
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss'; // Adjust this based on your file structure

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ''}`}>
      <div className={styles.logo}>
        
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">About</a></li>
        <li className={styles.navItem}><a href="#">Services</a></li>
        <li className={styles.navItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
