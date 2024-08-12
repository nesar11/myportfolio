// pages/index.js

import Navbar from './components/Navbar';
import Slide from './components/Slide';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import About from './components/About';
import SkillSection from './components/SkillSection';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="slide" style={{ marginBottom: '100px' }}>
        <Slide />
      </div>
      <div id="about" style={{  marginBottom: '100px', marginTop: '100' }}>
        <About />
      </div>
      <div id="skill" style={{  marginBottom: '100px', marginTop: '100' }}>
        <SkillSection />
      </div>
      <div id="services" style={{  marginBottom: '100px', marginTop: '100px' }}>
        <ServiceSection />
      </div>
      <div id="gallery" style={{  marginBottom: '100px', marginTop: '100px' }}>
        <PhotoGallery />
      </div>
      <div id="contact" style={{  marginBottom: '120px', marginTop: '120px'}}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
