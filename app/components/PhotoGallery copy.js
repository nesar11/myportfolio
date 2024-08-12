// PhotoGallery.jsx

import React from 'react';
import styles from './PhotoGallery.module.scss'; // Assuming you'll use SCSS for styling

const PhotoGallery = () => {
  // Replace with actual image URLs or import images as needed
  const images = [
    { id: 2, src: '/assets/images/pp1.png', alt: 'Photo 1' },
    { id: 1, src: '/assets/images/pp3.png', alt: 'Photo 3' },
    { id: 3, src: '/assets/images/pp6.png', alt: 'Photo 6' },
    { id: 4, src: '/assets/images/pp16.png', alt: 'Photo 16' },
    { id: 5, src: '/assets/images/pp15.png', alt: 'Photo 15' },
    { id: 6, src: '/assets/images/pp14.png', alt: 'Photo 14' },
    { id: 7, src: '/assets/images/pp13.png', alt: 'Photo 13' },
    { id: 8, src: '/assets/images/pp12.png', alt: 'Photo 12' },
    { id: 9, src: '/assets/images/pp7.png', alt: 'Photo 7' },
    { id: 10, src: '/assets/images/pp5.png', alt: 'Photo 5' },
    { id: 11, src: '/assets/images/pp4.png', alt: 'Photo 4' },
    { id: 12, src: '/assets/images/pp2.png', alt: 'Photo 2' },
     // { id: 7, src: '/assets/images/pic07.jpeg', alt: 'Photo 7' },
    // { id: 8, src: '/assets/images/pic08.jpeg', alt: 'Photo 8' },
    // { id: 9, src: '/assets/images/pic09.jpeg', alt: 'Photo 9' },
    // { id: 10, src: '/assets/images/pic10.jpeg', alt: 'Photo 10' },
    // { id: 11, src: '/assets/images/pic11.jpeg', alt: 'Photo 11' },
    // { id: 12, src: '/assets/images/pic12.jpeg', alt: 'Photo 12' },
    // { id: 11, src: '/assets/images/photo11.webp', alt: 'Photo 11' },
    // { id: 12, src: '/assets/images/photo12.webp', alt: 'Photo 12' },
    // Add more images as needed
  ];

  return (
    <div className={styles.photoGallery}>
      <h1>Projects</h1>
      <div className={styles.galleryContainer}>
        {images.map((image) => (
          <div key={image.id} className={styles.photoItem}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
