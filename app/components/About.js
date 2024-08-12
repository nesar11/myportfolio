import styles from './AboutSection.module.scss';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/about.jpg"
          alt="About Us Image"
          width={800}
          height={600}
          layout="responsive"
        />
      </div>
      <div className={styles.textContent}>
        <h1>Here a bit Myself</h1>
        <p>
          I am Nesar Uddin, With over 8 years in Information Technology, I&apos;ve led software development initiatives across diverse sectors, ensuring top-tier accessibility, customer experience, and usability. I excel in collaborative environments, delivering innovative solutions that exceed expectations. I&apos;m skilled in translating client needs into precise technical specifications and thrive on meeting tight deadlines. As a team player, I foster creativity and achieve exceptional results. Currently seeking to apply my expertise in a dynamic, growth-oriented company to drive excellence and innovation.
        </p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
    </div>
  );
};

export default AboutSection;
