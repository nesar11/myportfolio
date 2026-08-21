import { FiCheckCircle, FiCode, FiDatabase, FiLayers, FiMonitor, FiUser } from 'react-icons/fi';
import styles from './AboutSection.module.scss';

const strengths = [
  'Full Stack Web Development',
  'UI & UX Product Workflow',
  'System Architecture & API Design',
  'Multi-tenant SaaS Development',
  'Deployment & Monitoring',
];

const aboutCards = [
  {
    title: 'Frontend Development',
    text: 'Modern, responsive interfaces using React, Next.js, and clean UI systems.',
    Icon: FiMonitor,
    tone: 'green',
  },
  {
    title: 'Backend Engineering',
    text: 'Robust APIs and business logic with Node.js, NestJS, and scalable architecture.',
    Icon: FiLayers,
    tone: 'orange',
  },
  {
    title: 'Database & APIs',
    text: 'Efficient data models and secure APIs for reliability and performance.',
    Icon: FiDatabase,
    tone: 'blue',
  },
  {
    title: 'Problem Solver',
    text: 'Analytical thinking and clean code to turn complex needs into simple software.',
    Icon: FiCode,
    tone: 'purple',
  },
];

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <span className={styles.eyebrow}>About Me</span>
        <h1>Turning business ideas into real software</h1>
        <p className={styles.lead}>
          I help businesses and startups build complete digital systems, from
          planning and UI & UX to robust backends, secure databases, deployment,
          and continuous monitoring.
        </p>

        <ul className={styles.strengthList}>
          {strengths.map((item) => (
            <li key={item}>
              <FiCheckCircle aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.aboutButton}>
          Know More About Me
          <FiUser aria-hidden="true" />
        </a>
      </div>

      <div className={styles.cardGrid}>
        {aboutCards.map(({ title, text, Icon, tone }) => (
          <article key={title} className={styles.aboutCard}>
            <div className={`${styles.iconBox} ${styles[tone]}`}>
              <Icon aria-hidden="true" />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
