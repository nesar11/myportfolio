// pages/index.js

import Navbar from './components/Navbar';
import Slide from './components/Slide';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import About from './components/About';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: '80px' }}>
        <Slide />
      </div>
      <div style={{ marginBottom: '80px' }}>
        <About />
      </div>
      <div style={{ marginBottom: '80px' }}>
        <ServiceSection />
      </div>
      <div style={{ marginBottom: '80px' }}>
        <PhotoGallery />
      </div>
      <div style={{ marginBottom: '120px' }}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
