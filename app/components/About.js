import styles from './AboutSection.module.scss';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      {/* Left Side: Large About Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/about.jpg"
          alt="About Me Image"
          width={800}
          height={600}
          layout="responsive"
        />
      </div>

      {/* Right Side: Profile Image & Text */}
      <div className={styles.textContainer}>
        {/* Watermark Container (Background Circle) */}
        <div className={styles.watermarkContainer}>
          <Image
            src="/assets/images/me.png"
            alt="Watermark"
            width={300}
            height={300}
            className={styles.watermark}
          />
        </div>

        <h1>About Me</h1>
        <p>
          Hi, <br />
          Thank you for visiting my profile! <br />
          I have over 9 years of experience in Information Technology, specializing in software development across diverse industry sectors. Throughout my career, I have taken on leadership roles, driving accessibility, customer experience, and usability to the highest standards. My ability to collaborate effectively allows me to deliver innovative solutions that captivate and engage users. I am committed to meeting stringent deadlines while ensuring precise technical execution of client requirements.
        </p>

        <p>
          As a team player, I am adept at fostering creativity and delivering outstanding results. My adaptability enables me to quickly grasp new concepts and technologies, complemented by strong communication and problem-solving skills. Currently, I am seeking a dynamic, ambitious, and innovative company where I can contribute my expertise and grow professionally. My goal is to make a meaningful impact by driving excellence and efficiency in every project I undertake.
        </p>

        <p>
          I look forward to the opportunity to collaborate with a forward-thinking organization, making significant strides together and achieving long-term success.
        </p>

        <p>
          I am passionate about building high-performance solutions, excelling under tight deadlines, and transforming complex requirements into user-friendly applications. My approach is strategic and detail-oriented, ensuring optimal results in every project. I am eager to leverage my expertise in a growth-oriented company that values innovation and technical excellence.
        </p>

        <p>Thank you for your time and consideration.</p>
      </div>
    </div>
  );
};

export default AboutSection;
