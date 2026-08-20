import styles from './SkillSection.module.scss';
import {
  FaAndroid,
  FaAngular,
  FaAppStoreIos,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJira,
  FaNodeJs,
  FaReact,
  FaTrello,
  FaWindows,
} from 'react-icons/fa';
import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAnsible,
  SiAsana,
  SiCanva,
  SiExpress,
  SiFigma,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiPostgresql,
  SiSpringboot,
  SiVercel,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { VscTerminalCmd } from 'react-icons/vsc';

const skillGroups = [
  {
    title: 'Product Design',
    summary: 'User flows, wireframes, interfaces, and client-ready prototypes.',
    tools: [
      { name: 'Figma', Icon: SiFigma },
      { name: 'Adobe XD', Icon: SiAdobexd },
      { name: 'Photoshop', Icon: SiAdobephotoshop },
      { name: 'Illustrator', Icon: SiAdobeillustrator },
      { name: 'Canva', Icon: SiCanva },
    ],
  },
  {
    title: 'Frontend Engineering',
    summary: 'Responsive, fast, maintainable web interfaces for business apps.',
    tools: [
      { name: 'HTML', Icon: FaHtml5 },
      { name: 'React', Icon: FaReact },
      { name: 'Next.js', Icon: RiNextjsFill },
      { name: 'Angular', Icon: FaAngular },
      { name: 'Bootstrap', Icon: FaBootstrap },
    ],
  },
  {
    title: 'Backend Engineering',
    summary: 'APIs, services, authentication, integrations, and business logic.',
    tools: [
      { name: 'Java', Icon: FaJava },
      { name: 'Spring Boot', Icon: SiSpringboot },
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'NestJS', Icon: SiNestjs },
    ],
  },
  {
    title: 'Apps and Platforms',
    summary: 'Web, Android, iOS, Windows, and deployment-ready environments.',
    tools: [
      { name: 'Web', Icon: CgWebsite },
      { name: 'Android', Icon: FaAndroid },
      { name: 'iOS', Icon: FaAppStoreIos },
      { name: 'Windows', Icon: FaWindows },
      { name: 'Terminal', Icon: VscTerminalCmd },
    ],
  },
  {
    title: 'Cloud and DevOps',
    summary: 'Cloud hosting, containers, CI/CD thinking, and release stability.',
    tools: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Ansible', Icon: SiAnsible },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Netlify', Icon: SiNetlify },
    ],
  },
  {
    title: 'Data and Delivery',
    summary: 'Databases, version control, project flow, and team coordination.',
    tools: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'GitHub', Icon: FaGithub },
      { name: 'GitLab', Icon: FaGitlab },
      { name: 'Jira', Icon: FaJira },
      { name: 'Asana', Icon: SiAsana },
      { name: 'Trello', Icon: FaTrello },
    ],
  },
];

const deliveryStats = [
  'Full stack delivery',
  'Business workflow systems',
  'Cloud-ready deployment',
];

const SkillSection = () => {
  return (
    <section className={styles.skillSection}>
      <div className={styles.sectionIntro}>
        <span>Skills Set</span>
        <h1>Technology stack built around real product delivery.</h1>
        <p>
          I combine product thinking, frontend polish, backend structure, and
          DevOps practice to build systems that are usable, maintainable, and
          ready for day-to-day business operations.
        </p>
      </div>

      <div className={styles.statsBar}>
        {deliveryStats.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div className={styles.skillGrid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.skillCard}>
            <div className={styles.cardHeader}>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
            </div>

            <div className={styles.toolGrid}>
              {group.tools.map(({ name, Icon }) => (
                <div key={name} className={styles.toolItem}>
                  <Icon aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
