import styles from './SkillSection.module.scss';

const SkillSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.sectionHeader}>Skill Set</h1>
      <div className={styles.service}>
        <h2>UI & UX</h2>
        <p>Adobe XD, Figma, Adobe Photoshop, Adobe Illustrator</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Frontend</h2>
        <p>HTML,  ReactJS, NextJS, Angular, Bootstrap</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Backend</h2>
        <p>NodeJS, ExpressJS, NestJS</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Database</h2>
        <p>MongoDB, PosgresSQL</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Cloud Computing</h2>
        <p>AWS, Digital Ocean, Heroku, Netlify, Vercel, WHM</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Version control</h2>
        <p>Github, Bitbucket, Git Lab</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Project Management</h2>
        <p>Jira, Asana, Trello</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Mobile app</h2>
        <p>Mobile App Flutter</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Technical Support</h2>
        <p>Technical support involves providing troubleshooting, problem-solving, and guidance to users facing technical issuest</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
    </div>
  );
};

export default SkillSection;
