// pages/index.js

import Navbar from './components/Navbar';
import Slide from './components/Slide';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import About from './components/About';
import SkillSection from './components/SkillSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="slide" className={styles.heroSection}>
        <Slide />
      </div>
      <div id="about" className={styles.section}>
        <About />
      </div>
      <div id="skill" className={styles.section}>
        <SkillSection />
      </div>
      <div id="services" className={styles.section}>
        <ServiceSection />
      </div>
      <div id="gallery" className={styles.section}>
        <PhotoGallery />
      </div>
      <div id="contact" className={styles.lastSection}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
