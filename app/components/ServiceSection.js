import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.sectionHeader}>Services</h1>
      <div className={styles.service}>
        <h2>Web Developement</h2>
        <p>Are you looking for expert web development services tailored to your unique needs? Look no further! With over 7 years of experience in the industry, I specialize in delivering top-notch web development solutions.</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Open Source Integration</h2>
        <p> It's offer businesses the ability to harness the power of open source technologies and create customized, scalable, and cost-effective solutions. Such as, ERP, CRM, Cloud Storage, WordPress, Magengto</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Frontend Developement</h2>
        <p>I have a strong understanding of the fundamentals and best practices of both React and Angular. Stay up to date with the latest versions, features, and changes in each framework.</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Backend Developement</h2>
        <p>By offering backend development services using Node.js and Express, I can build scalable and high-performance server-side applications for clients.</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Devops</h2>
        <p>I assist clients streamline their software development and delivery processes, improve productivity, and ensure the stability and reliability of their applications.</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>UI & UX</h2>
        <p>software design that focus on enhancing the usability, effectiveness, and overall satisfaction of users interacting with a digital product, such as a website, mobile app, or software application.</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>QA Engineering</h2>
        <p>vital role in the software development lifecycle by designing and implementing test plans, identifying and reporting bugs, and working closely with developers to resolve issues</p>
        <button className={styles.readMoreButton}>Learn More</button>
      </div>
      <div className={styles.service}>
        <h2>Project Management</h2>
        <p>Effective project management ensures clear communication, efficient resource allocation, risk mitigation, and timely delivery of high-quality solutions.</p>
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

export default ServiceSection;
