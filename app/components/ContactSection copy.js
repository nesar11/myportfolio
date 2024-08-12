'use client';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
              />
            </div>
            <div className={styles.formGroup}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
              />
            </div>
            <div className={styles.formGroup}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                margin="normal"
                multiline
                rows={4}
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className={styles.sendButton}>
              Send
            </Button>
          </form>
        </div>
        <div className={styles.contactDetails}>
          <h2>Contact Information</h2>
          <h3>SUPPLY & COMMERCIAL SOLUTIONS</h3>
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Whatsapp:</strong> +1 234 567 810</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
