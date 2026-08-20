import Image from 'next/image';
import styles from './AboutSection.module.scss';

const highlights = [
  { value: '9+', label: 'Years IT Experience' },
  { value: 'Full Stack', label: 'Frontend to Backend' },
  { value: 'DevOps', label: 'Cloud and Delivery' },
];

const specialties = [
  'Business Web Apps',
  'QR Ordering Systems',
  'POS and Payments',
  'Booking Platforms',
  'Property Management',
  'Project Workflows',
];

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imagePanel}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/about.jpg"
            alt="Professional software development workspace"
            width={800}
            height={600}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.profileCard}>
          <Image
            src="/assets/images/me.png"
            alt="Nesar Uddin"
            width={92}
            height={92}
            className={styles.profileImage}
          />
          <div>
            <h2>Nesar Uddin</h2>
            <p>Full Stack Developer | DevOps | Product Builder</p>
          </div>
        </div>
      </div>

      <div className={styles.textContainer}>
        <span className={styles.eyebrow}>About Me</span>
        <h1>Senior software developer focused on real business systems.</h1>
        <p className={styles.lead}>
          I have over 9 years of experience in information technology, building
          practical software across food ordering, retail POS, hospitality,
          property, loan, field tracking, printing, and project management
          workflows.
        </p>
        <p>
          My work covers the full delivery path: UI and UX, frontend
          development, backend APIs, database design, integrations, deployment,
          DevOps, and ongoing support. I care about clear user journeys,
          dependable architecture, and solutions that teams can operate with
          confidence after launch.
        </p>

        <div className={styles.statsGrid}>
          {highlights.map((item) => (
            <div key={item.label} className={styles.statItem}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.specialties}>
          {specialties.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
