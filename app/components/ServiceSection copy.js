import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h1 className={styles.sectionHeader}>Services</h1>
      <div className={styles.service}>
        <h2>Financing</h2>
        <p>Strong financial position built on diverse investments and risk management. Expertise in financial instruments and tailored financing solutions.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
      <div className={styles.service}>
        <h2>Environmental Sustainability</h2>
        <p>Commitment to sustainable practices, energy efficiency, and innovative technologies to minimize ecological footprint.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
      <div className={styles.service}>
        <h2>Storage Tanks</h2>
        <p>Access to prime tank storage facilities worldwide, ensuring integrity, safety, and reliability according to industry standards.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
      <div className={styles.service}>
        <h2>Financing</h2>
        <p>Strong financial position built on diverse investments and risk management. Expertise in financial instruments and tailored financing solutions.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
      <div className={styles.service}>
        <h2>Environmental Sustainability</h2>
        <p>Commitment to sustainable practices, energy efficiency, and innovative technologies to minimize ecological footprint.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
      <div className={styles.service}>
        <h2>Storage Tanks</h2>
        <p>Access to prime tank storage facilities worldwide, ensuring integrity, safety, and reliability according to industry standards.</p>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
    </div>
  );
};

export default ServiceSection;
