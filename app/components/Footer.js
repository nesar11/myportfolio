import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Copyright &copy; {currentYear} by Nesar Uddin - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
