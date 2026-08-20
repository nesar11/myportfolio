'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import styles from './PhotoGallery.module.scss';

const projects = [
  {
    id: 1,
    src: '/assets/images/projects-new/qr-food-court.png',
    alt: 'QR food ordering system for food court dashboard preview',
    title: 'QR Food Ordering System',
    scope: 'Food Court',
    description:
      'Multi-stall ordering flow with QR table scan, cart, kitchen queue, and receipt printing support.',
    tags: ['QR Order', 'Kitchen Flow', 'Payment'],
    featured: true,
  },
  {
    id: 2,
    src: '/assets/images/projects-new/qr-food-cafe.png',
    alt: 'QR food ordering system for food cafe dashboard preview',
    title: 'QR Food Ordering System',
    scope: 'Food Cafe',
    description:
      'Cafe ordering experience for table service, menu browsing, order tracking, and add-on selection.',
    tags: ['Cafe Menu', 'Table Order', 'Mobile'],
  },
  {
    id: 3,
    src: '/assets/images/projects-new/product-loan.png',
    alt: 'Product loan management system dashboard preview',
    title: 'Product Loan Management System',
    scope: 'Loan Operations',
    description:
      'Loan application, repayment tracking, customer records, approval flow, and installment visibility.',
    tags: ['Loan Flow', 'Customers', 'Reports'],
  },
  {
    id: 4,
    src: '/assets/images/projects-new/property-management.png',
    alt: 'Property management system dashboard preview',
    title: 'Property Management System',
    scope: 'Real Estate',
    description:
      'Property, tenant, billing, maintenance, occupancy, and operational tracking for real estate teams.',
    tags: ['Tenant', 'Billing', 'Maintenance'],
  },
  {
    id: 5,
    src: '/assets/images/projects-new/hotel-booking.png',
    alt: 'Hotel booking management system dashboard preview',
    title: 'Hotel Booking Management System',
    scope: 'Hospitality',
    description:
      'Room calendar, booking status, guest records, check-in flow, and hotel operation dashboards.',
    tags: ['Booking', 'Rooms', 'Guests'],
  },
  {
    id: 6,
    src: '/assets/images/projects-new/retail-pos.png',
    alt: 'Retail POS system dashboard preview',
    title: 'POS for Retails',
    scope: 'Retail Sales',
    description:
      'Point-of-sale system for retail products, cart handling, receipts, stock movement, and sales flow.',
    tags: ['POS', 'Inventory', 'Sales'],
  },
  {
    id: 7,
    src: '/assets/images/projects-new/field-mate.png',
    alt: 'Field Mate worker tracking system dashboard preview',
    title: 'Field Mate Worker Tracking',
    scope: 'Workforce Tracking',
    description:
      'Field staff tracking, task updates, attendance visibility, job assignment, and location-aware reporting.',
    tags: ['Tracking', 'Tasks', 'Attendance'],
  },
  {
    id: 8,
    src: '/assets/images/projects-new/online-printing.png',
    alt: 'Online printing service dashboard preview',
    title: 'Online Printing Service',
    scope: 'Print Commerce',
    description:
      'Online print order flow with design upload, product selection, pricing options, and order management.',
    tags: ['Upload', 'Checkout', 'Orders'],
  },
  {
    id: 9,
    src: '/assets/images/projects-new/project-costing.png',
    alt: 'Project costing and flow management system dashboard preview',
    title: 'Project Costing and Flow Management',
    scope: 'Project Finance',
    description:
      'Cost estimation, approval workflow, resource planning, project progress, and budget visibility.',
    tags: ['Costing', 'Workflow', 'Approval'],
  },
];

const PhotoGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeDialog = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className={styles.photoGallery}>
      <div className={styles.sectionIntro}>
        <div>
          <span>Selected Work</span>
          <h1>Projects built for real business workflows.</h1>
        </div>
        <p>
          A focused portfolio of ordering, booking, POS, loan, property,
          workforce, printing, and project management systems designed to make
          daily operations easier to run.
        </p>
      </div>

      <div className={styles.galleryContainer}>
        {projects.map((project) => (
          <article
            key={project.id}
            className={`${styles.projectCard} ${project.featured ? styles.featuredCard : ''}`}
          >
            <button
              type="button"
              className={styles.imageFrame}
              onClick={() => setSelectedProject(project)}
              aria-label={`Open ${project.title} ${project.scope} image fullscreen`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={900}
                height={560}
                sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
              />
              <div className={styles.projectNumber}>
                {String(project.id).padStart(2, '0')}
              </div>
            </button>

            <div className={styles.projectInfo}>
              <div className={styles.titleRow}>
                <div>
                  <span>{project.scope}</span>
                  <h2>{project.title}</h2>
                </div>
                <FiArrowUpRight aria-hidden="true" />
              </div>

              <p>{project.description}</p>

              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className={styles.dialogBackdrop}
          role="presentation"
          onClick={closeDialog}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} ${selectedProject.scope} fullscreen preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeDialog}
              aria-label="Close fullscreen project image"
            >
              <FiX aria-hidden="true" />
            </button>

            <div className={styles.dialogImageWrap}>
              <Image
                src={selectedProject.src}
                alt={selectedProject.alt}
                width={1600}
                height={1000}
                sizes="100vw"
                priority
              />
            </div>

            <div className={styles.dialogCaption}>
              <span>{selectedProject.scope}</span>
              <h2>{selectedProject.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
