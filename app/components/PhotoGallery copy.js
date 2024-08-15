import React from 'react';
import styles from './PhotoGallery.module.scss'; // Assuming you'll use SCSS for styling
import Image from 'next/image';

const PhotoGallery = () => {
  // Replace with actual image URLs or import images as needed
  const images = [
    { id: 2, src: '/assets/images/pp1.png', alt: 'Photo 1', title: 'Retails POS System', width: 400, height: 300 },
    { id: 1, src: '/assets/images/pp3.png', alt: 'Photo 3', title: 'QR scan Food Order', width: 400, height: 300 },
    { id: 3, src: '/assets/images/pp6.png', alt: 'Photo 6', title: 'Installment Management System', width: 400, height: 300 },
    { id: 4, src: '/assets/images/pp16.png', alt: 'Photo 16', title: 'Corporate Website', width: 400, height: 300 },
    { id: 5, src: '/assets/images/pp15.png', alt: 'Photo 15', title: 'Corporate Website', width: 400, height: 300 },
    { id: 6, src: '/assets/images/pp14.png', alt: 'Photo 14', title: 'E-commerce', width: 400, height: 300 },
    { id: 7, src: '/assets/images/pp13.png', alt: 'Photo 13', title: 'Remate Attandance app', width: 400, height: 300 },
    { id: 8, src: '/assets/images/pp12.png', alt: 'Photo 12', title: 'Hotel booking app', width: 400, height: 300 },
    { id: 9, src: '/assets/images/pp7.png', alt: 'Photo 7', title: 'Terminal Payment integration', width: 400, height: 300 },
    { id: 10, src: '/assets/images/pp5.png', alt: 'Photo 5', title: 'Food Order', width: 400, height: 300 },
    { id: 11, src: '/assets/images/pp4.png', alt: 'Photo 4', title: 'Digital signage app', width: 400, height: 300 },
    { id: 12, src: '/assets/images/pp2.png', alt: 'Photo 2', title: 'QR Redemption app', width: 400, height: 300 },
    // Add more images as needed
  ];

  return (
    <div className={styles.photoGallery}>
      <h1>Projects</h1>
      <div className={styles.galleryContainer}>
        {images.map((image) => (
          <div key={image.id} className={styles.photoItem}>
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={image.width} 
              height={image.height} 
            />
            <div className={styles.photoTitle}>{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
