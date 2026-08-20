'use client';

import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

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

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedTheme || preferredTheme;

    setTheme(initialTheme);
    document.body.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    document.body.dataset.theme = nextTheme;
    window.localStorage.setItem('portfolio-theme', nextTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ''}`}>
      <div className={styles.logo}>
        <h1>Nesar Uddin</h1>
      </div>
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.close : ''}`} onClick={toggleMenu}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}><a href="#slide">Home</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#skill">Skills</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#gallery">Portfolio</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>
    </nav>
  );
};

export default Navbar;
