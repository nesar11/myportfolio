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
  FaPython,
  FaReact,
  FaRocket,
  FaTrello,
  FaWindows,
  FaLinux,
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
  SiGraphql,
  SiOracle,
  SiSpringboot,
  SiVercel,
  SiOdoo,
  SiMagento,
  SiWordpress,
  SiFlutter,
    
} from 'react-icons/si';

import { RiNextjsFill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { VscTerminalCmd } from 'react-icons/vsc';
import {
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiSettings,
  FiSmartphone,
  FiZap,
} from 'react-icons/fi';
import { FaFilePowerpoint } from 'react-icons/fa6';
const skillGroups = [
  {
    title: 'UI & UX Design',
    summary: 'Clean interfaces, wireframes, graphics, and visual presentations.',
    Icon: FiPenTool,
    tools: [
      { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
      { name: 'Adobe XD', Icon: SiAdobexd, color: '#ff26be' },
      { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31a8ff' },
      { name: 'Illustrator', Icon: SiAdobeillustrator, color: '#ff9a00' },
      { name: 'Canva', Icon: SiCanva, color: '#00c4cc' },
      {
        name: 'PowerPoint', Icon: FaFilePowerpoint, color: '#d24726',
      },
    ],
  },
  {
    title: 'Frontend Engineering',
    summary: 'Responsive web apps with React and Next.js.',
    Icon: FiGrid,
    tools: [
      { name: 'HTML', Icon: FaHtml5, color: '#e34f26' },
      { name: 'React', Icon: FaReact, color: '#22d3ee' },
      { name: 'Next.js', Icon: RiNextjsFill, color: '#000000' },
      { name: 'Angular', Icon: FaAngular, color: '#dd0031' },
      { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3' },
      { name: 'Flutter', Icon: SiFlutter, color: '#02569b' },
    ],
  },
  {
    title: 'Backend Engineering',
    summary: 'APIs, services, auth, and integrations.',
    Icon: FiSettings,
    tools: [
      { name: 'Java', Icon: FaJava, color: '#f97316' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f' },
      { name: 'Node.js', Icon: FaNodeJs, color: '#3c873a' },
      { name: 'Express.js', Icon: SiExpress, color: '#555555' },
      { name: 'NestJS', Icon: SiNestjs, color: '#e0234e' },
    ],
  },
  {
    title: 'Apps and Platforms',
    summary: 'Web, mobile, and platform delivery.',
    Icon: FiSmartphone,
    tools: [
      { name: 'Web', Icon: CgWebsite, color: '#0ea5e9' },
      { name: 'Android', Icon: FaAndroid, color: '#3ddc84' },
      { name: 'iOS', Icon: FaAppStoreIos, color: '#111827' },
      { name: 'Windows', Icon: FaWindows, color: '#0078d4' },
      { name: 'Linux', Icon: FaLinux, color: '#f5c211' },
      { name: 'Terminal', Icon: VscTerminalCmd, color: '#111827' },
    ],
  },
  {
    title: 'Cloud and DevOps',
    summary: 'Hosting, containers, and stable releases.',
    Icon: FiCloud,
    tools: [
      { name: 'AWS', Icon: FaAws, color: '#ff9900' },
      { name: 'Docker', Icon: FaDocker, color: '#2496ed' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5' },
      { name: 'Ansible', Icon: SiAnsible, color: '#000000' },
      { name: 'Vercel', Icon: SiVercel, color: '#000000' },
      { name: 'Netlify', Icon: SiNetlify, color: '#00c7b7' },
    ],
  },
  {
    title: 'AI & Automation',
    summary: 'Document scanning, OCR, extraction, and workflow automation.',
    Icon: FiCpu,
    tools: [
      { name: 'OpenAI APIs', Icon: FiCpu, color: '#10a37f' },
      { name: 'OCR', Icon: FiSearch, color: '#704bff' },
      { name: 'Document AI', Icon: FiFileText, color: '#f97316' },
      { name: 'Automation', Icon: FiZap, color: '#eab308' },
      { name: 'Python', Icon: FaPython, color: '#3776ab' },
      { name: 'REST APIs', Icon: FiCode, color: '#0ea5e9' },
    ],
  },
  {
    title: 'Databases ',
    summary: 'Databases',
    Icon: FiDatabase,
    tools: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { name: 'GraphQL', Icon: SiGraphql, color: '#e10098' },
      { name: 'Oracle', Icon: SiOracle, color: '#f80000' },

    ],
  },


  {
    title: 'Project Management',
    summary: 'Planning, task management, and efficient team delivery.',
    Icon: FiLayers,
    tools: [
      { name: 'Jira', Icon: FaJira, color: '#2684ff' },
      { name: 'Asana', Icon: SiAsana, color: '#f06a6a' },
      { name: 'Trello', Icon: FaTrello, color: '#0079bf' },
      { name: 'GitHub', Icon: FaGithub, color: '#111827' },
      { name: 'GitLab', Icon: FaGitlab, color: '#fc6d26' },
    ],
  },
  {
    title: 'Open Source Customization',
    summary: 'Custom modules, themes, integrations, and platform extensions.',
    Icon: FiCode,
    tools: [
      { name: 'Odoo', Icon: SiOdoo, color: '#714b67' },
      { name: 'Magento', Icon: SiMagento, color: '#ee672f' },
      { name: 'WordPress', Icon: SiWordpress, color: '#21759b' },
      { name: 'Custom APIs', Icon: FiZap, color: '#eab308' },
      { name: 'System Integration', Icon: FiSettings, color: '#0ea5e9' },
    ],
  },
];

const deliveryStats = [
  { value: '7', label: 'Categories', Icon: FiLayers },
  { value: '30+', label: 'Tools & Technologies', Icon: FiBox },
  { value: 'End-to-End', label: 'Product Development', Icon: FaRocket },
];

const SkillSection = () => {
  return (
    <section className={styles.skillSection}>
      <div className={styles.sectionIntro}>
        <div>
          <span className={styles.skillBadge}>
            <FiCode aria-hidden="true" />
            Skills & Tools
          </span>
          <h1>
            Tools I use to build modern <strong>digital products.</strong>
          </h1>
          <div className={styles.titleLine} />
          <p>
            A focused workflow for design, development, APIs, databases, and cloud deployment.
          </p>
        </div>

        <div className={styles.statsBar}>
          {deliveryStats.map(({ value, label, Icon }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statIcon}>
                <Icon aria-hidden="true" />
              </span>
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillGrid}>
        {skillGroups.map(({ title, summary, tools, Icon }) => (
          <article key={title} className={styles.skillCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{summary}</p>
              </div>
            </div>

            <div className={styles.toolGrid}>
              {tools.map(({ name, Icon, color }) => (
                <div key={name} className={styles.toolItem} style={{ '--tool-color': color }}>
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
