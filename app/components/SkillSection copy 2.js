import styles from './SkillSection.module.scss';
import { FaHtml5 , FaReact , FaAngular , FaBootstrap , FaJava , FaNodeJs , FaAws , FaDigitalOcean , FaGithub, FaBitbucket, FaGitlab,FaJira,FaTrello      } from 'react-icons/fa';

import { SiAdobexd, SiAdobephotoshop,SiAdobeillustrator, SiCanva,SiExpress,SiNestjs     } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiNextjsFill, RiVercelFill  } from "react-icons/ri";
import { SiSpringboot, SiMysql, SiNetlify,SiAsana,SiFlutter     } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiHeroku } from "react-icons/di";

const SkillSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.sectionHeader}>Skill Set</h1>
      <div className={styles.service}>
        <h2>UI & UX</h2>
        <p>Adobe XD, Figma,Canva,  Adobe Photoshop, Adobe Illustrator</p>
        <div><SiAdobexd size={50} color="#da4703" />  <PiFigmaLogoFill size={50} color="#da4703" />
        <SiAdobephotoshop size={50} color="#da4703" /> <SiAdobeillustrator size={50} color="#da4703" /> <SiCanva size={50} color="#da4703" /></div>

        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Frontend</h2>
        <p>HTML,  ReactJS, NextJS, Angular, Bootstrap</p>
        <div><FaHtml5 size={50} color="#da4703" /> <FaReact  size={50} color="#da4703" /> <RiNextjsFill  size={50} color="#da4703" /> <FaAngular  size={50} color="#da4703" /> 
        <FaBootstrap   size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Backend</h2>
        <p>Java, Spring Boot, NodeJS, ExpressJS, NestJS,</p>
        <div><FaJava  size={50} color="#da4703" /> <SiSpringboot   size={50} color="#da4703" /> <FaNodeJs  size={50} color="#da4703" /> <SiExpress   size={50} color="#da4703" /> 
        <SiNestjs    size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>

      </div>
      <div className={styles.service}>
        <h2>Database</h2>
        <p>MongoDB, PosgresSQL, MySQL</p>
        <div><DiMongodb  size={50} color="#da4703" /> <BiLogoPostgresql   size={50} color="#da4703" /> <SiMysql   size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Cloud Computing</h2>
        <p>AWS, Digital Ocean, Heroku, Netlify, Vercel, WHM</p>
        <div><FaAws  size={50} color="#da4703" /> <FaDigitalOcean    size={50} color="#da4703" /> 
        <DiHeroku   size={50} color="#da4703" /> <SiNetlify   size={50} color="#da4703" /> <RiVercelFill    size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Version control</h2>
        <p>Github, Bitbucket, Git Lab</p>
        <div><FaGithub   size={50} color="#da4703" /> <FaBitbucket   size={50} color="#da4703" /> <FaGitlab    size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Project Management</h2>
        <p>Jira, Asana, Trello</p>
        <div><FaJira    size={50} color="#da4703" /> <SiAsana    size={50} color="#da4703" /> <FaTrello     size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Mobile app</h2>
        <p>Mobile App Flutter</p>
        <div><SiFlutter     size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Technical Support</h2>
        <p>Technical support involves providing troubleshooting, problem-solving, and guidance to users facing technical issuest</p>
        <div><SiFlutter     size={50} color="#da4703" /> 
        </div>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
    </div>
  );
};

export default SkillSection;
