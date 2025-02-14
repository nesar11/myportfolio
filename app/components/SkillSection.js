import styles from './SkillSection.module.scss';
import { FaHtml5, FaReact, FaAngular, FaBootstrap, FaJava,
   FaNodeJs, FaAws, FaDigitalOcean, FaGithub, FaBitbucket, 
   FaGitlab, FaJira, FaTrello, FaDocker,
   FaAndroid,FaAppStoreIos, FaWindows, FaUbuntu      } from 'react-icons/fa';

import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiExpress, SiNestjs } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiNextjsFill, RiVercelFill } from "react-icons/ri";
import { SiSpringboot, SiMysql, SiNetlify, SiAsana, SiFlutter } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiHeroku } from "react-icons/di";
import { SiKubernetes, SiAnsible, SiServerless   } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";


const SkillSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.sectionHeader}>Skills Set</h1>
      <div className={styles.service}>
        <h2>UI & UX</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <SiAdobexd size={50} color="#da4703" />
            <span>Adobe XD</span>
          </div>
          <div className={styles.iconItem}>
            <PiFigmaLogoFill size={50} color="#da4703" />
            <span>Figma</span>
          </div>
          <div className={styles.iconItem}>
            <SiAdobephotoshop size={50} color="#da4703" />
            <span>Photoshop</span>
          </div>
          <div className={styles.iconItem}>
            <SiAdobeillustrator size={50} color="#da4703" />
            <span>Illustrator</span>
          </div>
          <div className={styles.iconItem}>
            <SiCanva size={50} color="#da4703" />
            <span>Canva</span>
          </div>
        </div>

      </div>

      <div className={styles.service}>
        <h2>Frontend</h2>
        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaHtml5 size={50} color="#da4703" />
            <span>HTML</span>
          </div>
          <div className={styles.iconItem}>
            <FaReact size={50} color="#da4703" />
            <span>ReactJS</span>
          </div>
          <div className={styles.iconItem}>
            <RiNextjsFill size={50} color="#da4703" />
            <span>NextJS</span>
          </div>
          <div className={styles.iconItem}>
            <FaAngular size={50} color="#da4703" />
            <span>Angular</span>
          </div>
          <div className={styles.iconItem}>
            <FaBootstrap size={50} color="#da4703" />
            <span>Bootstrap</span>
          </div>
        </div>

      </div>

      <div className={styles.service}>
        <h2>Backend</h2>
        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaJava size={50} color="#da4703" />
            <span>Java</span>
          </div>

          <div className={styles.iconItem}>
            <SiSpringboot size={50} color="#da4703" />
            <span>Spring Boot</span>
          </div>
          <div className={styles.iconItem}>
            <FaNodeJs size={50} color="#da4703" />
            <span>NodeJS</span>
          </div>
          <div className={styles.iconItem}>
            <SiExpress size={50} color="#da4703" />
            <span>ExpressJS</span>
          </div>
          <div className={styles.iconItem}>
            <SiNestjs size={50} color="#da4703" />
            <span>NestJS</span>
          </div>
        </div>
      </div>


      <div className={styles.service}>
        <h2>App Developement</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaAndroid size={50} color="#da4703" />
            <span>Android</span>
          </div>
          <div className={styles.iconItem}>
            <FaAppStoreIos size={50} color="#da4703" />
            <span>ios</span>
          </div>
          <div className={styles.iconItem}>
            <FaWindows size={50} color="#da4703" />
            <span>Windows</span>
          </div>
          <div className={styles.iconItem}>
            <CgWebsite size={50} color="#da4703" />
            <span>Web</span>
          </div>
          <div className={styles.iconItem}>
            <FaUbuntu size={50} color="#da4703" />
            <span>Ubuntu</span>
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <h2>Cloud Computing</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaAws size={50} color="#da4703" />
            <span>AWS</span>
          </div>
          <div className={styles.iconItem}>
            <FaDigitalOcean size={50} color="#da4703" />
            <span>Digital Ocean</span>
          </div>
          <div className={styles.iconItem}>
            <SiNetlify size={50} color="#da4703" />
            <span>Netlify</span>
          </div>
          <div className={styles.iconItem}>
            <DiHeroku size={50} color="#da4703" />
            <span>Heroku</span>
          </div>
          <div className={styles.iconItem}>
            <RiVercelFill size={50} color="#da4703" />
            <span>Vercel</span>
          </div>
        </div>
      </div>
      
      <div className={styles.service}>
        <h2>DevOps Tools</h2>
        
        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaDocker size={50} color="#da4703" />
            <span>Docker</span>
          </div>
          <div className={styles.iconItem}>
            <SiKubernetes size={50} color="#da4703" />
            <span>Kubernetes</span>
          </div>
        
          <div className={styles.iconItem}>
            <SiAnsible size={50} color="#da4703" />
            <span>Ansible</span>
          </div>
      
          <div className={styles.iconItem}>
            <SiServerless  size={50} color="#da4703" />
            <span>Serverless</span>
          </div>
          <div className={styles.iconItem}>
            <VscTerminalCmd  size={50} color="#da4703" />
            <span>CMD</span>
          </div>
      
        </div>
       
      </div>
      <div className={styles.service}>
        <h2>Database</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <DiMongodb size={50} color="#da4703" />
            <span>MongoDB</span>
          </div>
          <div className={styles.iconItem}>
            <BiLogoPostgresql size={50} color="#da4703" />
            <span>PosgresSQL</span>
          </div>
          <div className={styles.iconItem}>
            <SiMysql size={50} color="#da4703" />
            <span>MySQL</span>
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <h2>Version control</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaGithub size={50} color="#da4703" />
            <span>Github</span>
          </div>
          <div className={styles.iconItem}>
            <FaBitbucket size={50} color="#da4703" />
            <span>Bitbucket</span>
          </div>
          <div className={styles.iconItem}>
            <FaGitlab size={50} color="#da4703" />
            <span>Git Lab</span>
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <h2>Project Management</h2>

        <div className={styles.iconContainer}>
          <div className={styles.iconItem}>
            <FaJira size={50} color="#da4703" />
            <span>Jira</span>
          </div>
          <div className={styles.iconItem}>
            <SiAsana size={50} color="#da4703" />
            <span>Asana</span>
          </div>
          <div className={styles.iconItem}>
            <FaTrello size={50} color="#da4703" />
            <span>Trello</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SkillSection;
