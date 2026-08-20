import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiLifeBuoy,
  FiMonitor,
  FiRepeat,
  FiShield,
  FiUsers,
} from 'react-icons/fi';
import styles from './ServiceSection.module.scss';

const services = [
  {
    title: 'UI and UX Design',
    Icon: FiLayers,
    description:
      'Clean user journeys, wireframes, and interface design for business systems that need to be simple, fast, and easy to operate.',
    points: ['User flow planning', 'Dashboard layouts', 'Responsive interface design'],
  },
  {
    title: 'Web Application Development',
    Icon: FiMonitor,
    description:
      'Custom web applications for ordering, booking, retail, property, loan, printing, and operational workflows.',
    points: ['Admin portals', 'Customer portals', 'Business dashboards'],
  },
  {
    title: 'Frontend Development',
    Icon: FiCode,
    description:
      'Modern frontend implementation with React, Next.js, Angular, responsive styling, and performance-focused UI structure.',
    points: ['React / Next.js', 'Angular', 'Mobile-first layouts'],
  },
  {
    title: 'Backend Development',
    Icon: FiDatabase,
    description:
      'Reliable APIs, databases, authentication, integrations, reporting logic, and scalable server-side architecture.',
    points: ['REST APIs', 'Database design', 'System integrations'],
  },
  {
    title: 'Open Source Integration',
    Icon: FiRepeat,
    description:
      'Integration and customization of open-source platforms such as ERP, CRM, CMS, storage, and automation tools.',
    points: ['ERP / CRM setup', 'WordPress', 'Cloud storage tools'],
  },
  {
    title: 'DevOps and Deployment',
    Icon: FiCloud,
    description:
      'Deployment, hosting, release workflow, containerization, and cloud setup for applications that need dependable delivery.',
    points: ['Cloud hosting', 'Docker workflow', 'CI/CD support'],
  },
  {
    title: 'QA Engineering',
    Icon: FiShield,
    description:
      'Testing support for user flows, business logic, integrations, regressions, and production-ready release confidence.',
    points: ['Functional testing', 'Bug reporting', 'Release validation'],
  },
  {
    title: 'Project Management',
    Icon: FiUsers,
    description:
      'Clear coordination across requirements, scope, timelines, delivery milestones, and stakeholder communication.',
    points: ['Scope planning', 'Delivery tracking', 'Client coordination'],
  },
  {
    title: 'Technical Support',
    Icon: FiLifeBuoy,
    description:
      'Post-launch support, troubleshooting, improvements, issue resolution, and system guidance for business users.',
    points: ['Issue fixing', 'User support', 'Maintenance'],
  },
];

const process = ['Plan', 'Design', 'Develop', 'Deploy', 'Support'];

const ServiceSection = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.sectionIntro}>
        <span>Services</span>
        <h1>End-to-end software services for business operations.</h1>
        <p>
          From first requirement to production support, I help build practical
          systems that improve ordering, booking, sales, tracking, reporting,
          and day-to-day management.
        </p>
      </div>

      <div className={styles.processStrip}>
        {process.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>

      <div className={styles.serviceGrid}>
        {services.map(({ title, Icon, description, points }) => (
          <article key={title} className={styles.serviceCard}>
            <div className={styles.iconBox}>
              <Icon aria-hidden="true" />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
