'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
        {/* <Image
          src="/assets/images/petrisula.png" // Replace with the path to your logo image
          alt="Logo"
          width={130} // Adjust width as needed
          height={50} // Adjust height as needed
        /> */}
        <h1>Nesar Uddin</h1>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#slide">Home</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#skill">Skills</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#gallery">Portfolio</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
