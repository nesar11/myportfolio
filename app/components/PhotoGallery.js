'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FiArrowRight,
  FiBriefcase,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiFolder,
  FiHome,
  FiMapPin,
  FiCoffee,
  FiPrinter,
  FiTrendingUp,
  FiShield,
  FiShoppingBag,
  FiX,
} from 'react-icons/fi';
import styles from './PhotoGallery.module.scss';

const projects = [
  {
    id: 1,
    src: '/assets/images/projects-new/hotel-booking.png',
    alt: 'Hotel PMS dashboard preview',
    title: 'Hoteliums PMS',
    scope: 'Hospitality',
    description:
      'Smart hotel and property management platform with booking, housekeeping, HR, payroll, guest portal, OTA connectivity, and channel manager support.',
    tags: ['SaaS', 'Hotel PMS', 'OTA / Channel Manager'],
    Icon: FiHome,
  },
  {
    id: 2,
    src: '/assets/images/projects-new/qr-food-court.png',
    alt: 'QR food ordering system for food court dashboard preview',
    title: 'QR Food Ordering System',
    scope: 'Food Ordering',
    description:
      'QR menu and digital ordering for food courts and cafes with merchant operations and order flow.',
    tags: ['Ordering', 'Restaurant', 'POS'],
    Icon: FiShoppingBag,
  },
  {
    id: 3,
    src: '/assets/images/projects-new/property-management.png',
    alt: 'Property management system dashboard preview',
    title: 'Property Management System',
    scope: 'Property Operations',
    description:
      'System for units, tenants, agreements, rent tracking, and operations.',
    tags: ['Property', 'Management', 'Dashboard'],
    Icon: FiBriefcase,
  },
  {
    id: 4,
    src: '/assets/images/projects-new/product-loan.png',
    alt: 'Product loan management system dashboard preview',
    title: 'Product Loan Management System',
    scope: 'Finance Workflow',
    description:
      'Loan workflow management, reporting, approvals, and repayment tracking.',
    tags: ['Finance', 'Workflow', 'Reporting'],
    Icon: FiDollarSign,
  },
  {
    id: 5,
    src: '/assets/images/projects-new/retail-pos.png',
    alt: 'Retail POS system dashboard preview',
    title: 'Retail POS System',
    scope: 'Retail Sales',
    description:
      'Point-of-sale platform for retail operations, inventory, billing, and sales management.',
    tags: ['Retail', 'POS', 'Inventory'],
    Icon: FiShoppingBag,
  },
  {
    id: 6,
    src: '/assets/images/projects-new/online-printing.png',
    alt: 'Online printing service dashboard preview',
    title: 'Online Printing Service',
    scope: 'Print Operations',
    description:
      'Web-based order and workflow system for custom printing requests and production handling.',
    tags: ['E-commerce', 'Orders', 'Operations'],
    Icon: FiPrinter,
  },
  {
    id: 7,
    src: '/assets/images/projects-new/qr-food-cafe.png',
    alt: 'QR food ordering system for cafe dashboard preview',
    title: 'Smart Cafe Ordering Platform',
    scope: 'Cafe Table Service',
    description:
      'Cafe-focused table service with digital menu, item add-ons, staff notifications, and order status flow.',
    tags: ['Cafe', 'Table Service', 'Add-ons'],
    Icon: FiCoffee,
  },
  {
    id: 8,
    src: '/assets/images/projects-new/field-mate.png',
    alt: 'Field Mate worker tracking dashboard preview',
    title: 'Field Mate Worker Tracking',
    scope: 'Workforce Tracking',
    description:
      'Field staff tracking, task updates, attendance visibility, job assignment, and reporting.',
    tags: ['Tracking', 'Tasks', 'Attendance'],
    Icon: FiMapPin,
  },
  {
    id: 9,
    src: '/assets/images/projects-new/project-costing.png',
    alt: 'Project costing and flow management dashboard preview',
    title: 'Project Costing and Flow Management',
    scope: 'Project Finance',
    description:
      'Cost estimation, approval workflow, resource planning, project progress, and budget visibility.',
    tags: ['Costing', 'Workflow', 'Approval'],
    Icon: FiTrendingUp,
  },
  {
    id: 10,
    src: '/assets/images/projects-new/ai-document-scan.png',
    alt: 'AI document scan and OCR dashboard preview',
    title: 'AI Document Scan System',
    scope: 'AI Automation',
    description:
      'AI-powered document scanning system for OCR extraction, classification, review queues, and automated data export.',
    tags: ['AI', 'OCR', 'Document Scan'],
    Icon: FiFileText,
  },
];

const projectStats = [
  { value: '20+', label: 'Projects', Icon: FiFolder },
  { value: '10+', label: 'Years Experience', Icon: FiCalendar },
  { value: 'End-to-End', label: 'Delivery', Icon: FiShield },
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
          <span className={styles.projectBadge}>
            <FiFolder aria-hidden="true" />
            Projects
          </span>
          <h1>
            Products and systems I&apos;ve built for <strong>real business operations.</strong>
          </h1>
          <div className={styles.titleLine} />
          <p>
            End-to-end products and systems designed and shipped to solve real
            business problems across SaaS, booking, food ordering, property,
            retail, and business operations.
          </p>
        </div>

        <div className={styles.statsBar}>
          {projectStats.map(({ value, label, Icon }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statIcon}>
                <Icon aria-hidden="true" />
              </span>
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.galleryContainer}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
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
            </button>

            <div className={styles.projectInfo}>
              <div className={styles.titleRow}>
                <span className={styles.projectIcon}>
                  <project.Icon aria-hidden="true" />
                </span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <a href="#contact" className={styles.viewButton}>
        View All Projects
        <FiArrowRight aria-hidden="true" />
      </a>

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
